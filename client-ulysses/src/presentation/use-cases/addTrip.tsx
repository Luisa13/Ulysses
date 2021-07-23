import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';

import { AuthContext } from '../../domain/components/authContext';
import User from '../../domain/entity/User'

type Props = {
    show: boolean
    hide: () => void
    //user: User
}

const AddNewTripModal:  React.FC<Props> = ({show, hide}) =>{
    console.log("show")
    console.log(show)
    const{ userInfo } = React.useContext(AuthContext);
    

    const handleAddUser = () =>{
        console.info("processing api call...");
    }


    return(
        <Modal 
            show={show}
            onHide = {hide}
            backdrop="static"
        >
            <Modal.Header >
                <Modal.Title>Add new Trip</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name's Trip</Form.Label>
                    <Form.Control type="text" placeholder="Enter name for your trip" />
                    <Form.Text className="text-muted">
                    This will be just the name for your trip :).
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Date</Form.Label>
                    <Form.Control type="date" placeholder="Date" />
                </Form.Group>
    
            </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {hide}>Cancel</Button>
                <Button variant="primary" onClick = {handleAddUser}>Save changes</Button>
            </Modal.Footer>
        </Modal>

    );
};



export default AddNewTripModal;