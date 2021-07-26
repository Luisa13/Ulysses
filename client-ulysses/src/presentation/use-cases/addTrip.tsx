import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap';
import { Field, FormikProps } from 'formik';

import { AuthContext } from '../../domain/components/authContext';
import * as ApiService from '../../util/ApiService'
import Stage from '../../domain/entity/Stage';
import Trip from '../../domain/entity/Trip';
import { render } from '@testing-library/react';


type Props = {
    show: boolean
    hide: () => void
}


const AddNewTripModal:  React.FC<Props> = ({show, hide}) =>{
    const{ userInfo } = React.useContext(AuthContext);
    const[state, setState] = useState({name: "", date: new Date()});


    const handleInputField = (event: React.ChangeEvent<HTMLInputElement>) =>{
        event.preventDefault();
        const { name, value } = event.target;
        setState((prev)=>({
            ...prev,
            [name]: value
        }));
    }


    const handleAddTrip = async() =>{
        console.info("processing api call...");
        const users: (number | undefined)[] = [];
        users.push(userInfo?.id)

        const newTrip = new Trip(1, state.name, state.date.toString(), users, []);
        const response = await ApiService.createTrip(newTrip);
        show = false;

        await hide();
    }


    return(
        <Modal 
            show={show}
            onHide = {hide}
        >
            <Modal.Header >
                <Modal.Title>Add new Trip</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name's Trip</Form.Label>
                    <Form.Control name = "name" type="text" placeholder="Enter name for your trip" onChange = {handleInputField} />
                    <Form.Text className="text-muted">
                    This will be just the name for your trip :).
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Date</Form.Label>
                    <Form.Control name = "date" type="date" placeholder="Date" onChange = {handleInputField}/>
                </Form.Group>
            </Form>

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick = {hide}>Cancel</Button>
                <Button variant="primary" onClick = {handleAddTrip}>Save changes</Button>
            </Modal.Footer>
        </Modal>

    );
};



export default AddNewTripModal;