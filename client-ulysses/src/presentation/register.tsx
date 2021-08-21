import React from 'react';
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import {Field, FieldProps, Formik, FormikHelpers, FormikProps} from 'formik';

const Register: React.FC = () => {

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
                        <input type="text" className="form-control" placeholder="First name" />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Last name</label>
                        <input type="text" className="form-control" placeholder="Last name" />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" />
                    </div>
                    <br></br>

                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" />
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Repeat Password</label>
                        <input type="password" className="form-control" placeholder="Enter password again" />
                    </div>
                    <br></br>

                    <Button 
                        className="btn btn-primary btn-block"
                        type="submit"
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
            </div>

        );
    }

export default Register;