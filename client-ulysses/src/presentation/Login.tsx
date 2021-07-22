import React, {useState} from 'react';
import '../login.css'
import {useHistory} from "react-router-dom";
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {Field, FieldProps, Formik, FormikHelpers, FormikProps} from 'formik';
import * as Yup from 'yup';


import * as  ApiService from "../Service/ApiService";
import { AuthContext } from '../domain/components/authContext';
import useAppContext from '../hooks/useAppContext';
import User from '../domain/entity/User';

type LoginFormFields = {
  username: string
  password: string
}

const Login: React.FC = () => {
  const history = useHistory();
  const [errorMessage, setErrorMessage] = useState<string>('');
  //const [username, setUsername] = useState('');
  //const [password, setPassword] = useState('');
  const{ setUserInfo } = React.useContext(AuthContext);
  const {setCurrentUser} = useAppContext();

  // Just for form validation
  const form: {initialValues: LoginFormFields, validationSchema: Yup.AnyObjectSchema} = {
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema: Yup.object().shape({
      username: Yup.string().required('Required'),
      password: Yup.string().required('Required')
    })
  };


  const handleSubmit = async (values: LoginFormFields, formikHelpers: FormikHelpers<LoginFormFields>) => {
    try {
      console.log("Login... ");
     const token = await ApiService.login(values.username, values.password)
     // console.log(token.accessToken);
     const user = await ApiService.getUser(token.accessToken)
     .then(res =>{
       //if('id' in res){
        //setCurrentUser(res);
        history.push({pathname: "/Entry"});
       //}
     })
     .catch(ex => {console.error("Error: " + ex)});
      //console.log(user);
     // setCurrentUser(user);
      
      //console.log(user);
      /*const token = await ApiService.login(values.username, values.password).then( res =>{
          if('accessToken' in res){
            setUserInfo(values.username);
            
            //setCurrentUser(new User(({id:1, name:"bla", surname:"dd"}));
            history.push({pathname: "/Entry"});


          }else if ('status' in res){
            if(res.status == 403){
              setErrorMessage('Wrong credentials');
            }
          }
      });*/

      
    } catch (error) {
        formikHelpers.setSubmitting(false);
        if (error instanceof TypeError) {
          setErrorMessage('Unable to connect to service.');
        } else {
          setErrorMessage(error.message);
        }
    }
  };

  return (
    <div className="outer">
    <div className="inner">
      <Container fluid className="Login mt-5">
        <Row>
        <h3>Login</h3>
          <Col>
                {errorMessage && <p className="text-center text-danger">{errorMessage}</p>}
                <Formik initialValues={form.initialValues}
                        validationSchema={form.validationSchema}
                        onSubmit={handleSubmit}>
                  {(formikProps: FormikProps<LoginFormFields>) =>
                    <Form onSubmit={formikProps.handleSubmit} method="post">
                      <Form.Group controlId="username">
                        <Form.Label>Username</Form.Label>
                        <Field name="username">
                          {({field, meta}: FieldProps) => (
                            <Form.Control {...field}
                                          placeholder="Username"
                                          autoComplete="username"
                                          isInvalid={!!(meta.touched && meta.error)}/>
                          )}
                        </Field>
                        <Form.Control.Feedback type="invalid">
                          {formikProps.errors.username}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br></br>
                      <Form.Group controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Field name="password">
                          {({field, meta}: FieldProps) => (
                            <Form.Control {...field}
                                          type="password"
                                          autoComplete="current-password"
                                          placeholder="Password"
                                          isInvalid={!!(meta.touched && meta.error)}/>
                          )}
                        </Field>
                        <Form.Control.Feedback type="invalid">
                          {formikProps.errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>
                      <br></br>
                      <Form.Group>
                          <Button 
                            className="btn btn-primary btn-block"
                            type="submit"
                            block
                            disabled={!formikProps.isValid || formikProps.isSubmitting}>
                            Login
                          </Button>
                      </Form.Group>
                      <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                  </p>
                    </Form>
                  }
                </Formik>

          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );

};

export default Login;