import React from "react";
//import {useHistory} from 'react-router-dom';
import {Button, Card, Col, Container, Form, Row} from 'react-bootstrap';
import {Field, FieldProps, Formik, FormikHelpers, FormikProps} from 'formik';


type LoginFormFields = {
    username: string
    password: string
}

const Login: React.FC = () =>{
    return(
        <React.Fragment>
      <div className="container">
        <div className="login-wrapper">
          <h2>Login Page</h2>
          <Form className="form-container">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field type="text" name="email" className={"form-control"} placeholder="Email" />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" className={"form-control"} placeholder="Password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </Form>
        </div>
      </div>
    </React.Fragment>
    );
}

export default Login;