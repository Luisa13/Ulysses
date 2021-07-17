import React, {useEffect, useState} from 'react';
//import {useHistory} from 'react-router-dom';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import {Field, FieldProps, Formik, FormikHelpers, FormikProps} from 'formik';
import * as Yup from 'yup';

//import {authApi, userApi} from '../api';
//import {useAppContext} from '../hooks';
import * as  ApiService from "../Service/ApiService";

type LoginFormFields = {
  username: string
  password: string
}

const Login: React.FC = () => {
  //const history = useHistory();
  //const {currentUser, setCurrentUser} = useAppContext();
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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

  /*const test = async () =>{
    console.log("Login... ");
  }*/

  const handleSubmit = async (values: LoginFormFields, formikHelpers: FormikHelpers<LoginFormFields>) => {
    try {
      console.log("Login... ");
      const token = await ApiService.login(values.username, values.password);
      //localStorage.setItem('token', token);
      // Get the current user's information next
      //const user = await userApi.currentUser();
      // Setting the current user will re-render the routes to be the available in App.tsx
      formikHelpers.setSubmitting(false);
     // setCurrentUser(user);
    } catch (error) {
      formikHelpers.setSubmitting(false);
      if (error instanceof TypeError) {
        setErrorMessage('Unable to connect to service.');
      } else {
        setErrorMessage(error.message);
      }
    }
  };

  /*useEffect(() => {
    if (currentUser) {
      history.push('/users');
    }
  }, [currentUser, history]);*/

  return (
    <Container fluid className="Login mt-5">
      <Row>
      <h3>Login</h3>
        <Col>
              {errorMessage && <p className="text-center text-danger">{errorMessage}</p>}
              <Formik initialValues={form.initialValues}
                      validationSchema={form.validationSchema}
                      onSubmit={handleSubmit}>
                {(formikProps: FormikProps<LoginFormFields>) =>
                  <Form onSubmit={formikProps.handleSubmit}>
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
                      variant="primary"
                      type="submit"
                              block
                              disabled={!formikProps.isValid || formikProps.isSubmitting}>
                        Login
                      </Button>
                    </Form.Group>
                  </Form>
                }
              </Formik>

        </Col>
      </Row>
    </Container>
  );

  /*return(
        <Form>   
            <h3>Log in</h3>
             <div className="form-group">
                <label>Username</label>
                <input type="username" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <Button onClick={this.test} className="btn btn-dark btn-lg btn-block" >Login</Button>
            <p className="forgot-password text-right">
              Forgot <a href="#">password?</a>
            </p>

        </Form>

  );*/
};

export default Login;