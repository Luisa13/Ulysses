import React, { useState } from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
//import {Field, FieldProps, Formik, FormikHelpers, FormikProps} from 'formik';
import * as Provider from '../util/Provider';
import User from '../domain/entity/User';
import Trip from '../domain/entity/Trip';
import toast, { Toaster } from 'react-hot-toast';

const Register: React.FC = () => {
    const [state, setState] = useState({name:"", surname:"", email:"", password:"", password2:""});
    const blocUser = Provider.ProviderUsers();

    const handlerChangeForm = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        const { name, value } = event.target;
        setState((prev)=>({
            ...prev,
            [name]: value
        }))
    }

    const handleRegisterUser = () =>{
        if(state.password !== state.password2){
            console.error("The passwords must be the same");
            return;
        }
        const newUser = new User(1, state.name, state.surname, state.email, state.password, "USER", [] as Trip[]);
        console.log(newUser);
        blocUser.createUser(newUser)
        .then(res =>{
            toast('Welcome to Ulysses! we sent you an email', {
                icon: '👏',
              });
        })
        .catch(error =>{
            console.log("Error creating new user: " + error);
        });
    }

    return(
            <div className="outer">
            <div className="inner">
            <Container fluid className="Login lg-5">
            <Row>
            <h3>Register</h3>
            <Col>
            <Form>

                    <div className="form-group">
                        <label>First name</label>
                        <input name = "name" type="text" className="form-control" placeholder="First name" onChange = {handlerChangeForm}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Last name</label>
                        <input name = "surname" type="text" className="form-control" placeholder="Last name" onChange = {handlerChangeForm}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Email</label>
                        <input name = "email" type="email" className="form-control" placeholder="Enter email" onChange = {handlerChangeForm}/>
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Password</label>
                        <input name = "password" type="password" className="form-control" placeholder="Enter password" onChange = {handlerChangeForm}/>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Repeat Password</label>
                        <input name = "password2" type="password" className="form-control" placeholder="Enter password again" onChange = {handlerChangeForm}/>
                    </div>
                    <br></br>

                    <Button 
                        className="btn btn-primary btn-block"
                        type="submit"
                        onClick = {handleRegisterUser}
                        block
                        >
                        Register
                    </Button>
                    <p className="forgot-password text-right">
                        Already registered <a href="#">log in?</a>
                    </p>
                </Form>

            </Col>
            </Row>
            </Container>
            </div>

            <Toaster 
                position="top-right"
                reverseOrder={false}/>
            </div>

        );
    }

export default Register;