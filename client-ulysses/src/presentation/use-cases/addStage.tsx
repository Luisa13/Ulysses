import React from 'react';
import {Button, Form, Modal} from 'react-bootstrap';


type Props = {
    show: boolean
    hide: () => void
}

const AddNewStageModal: React.FC<Props> = ({show, hide}) =>{


    return(
        <Modal 
            show={show}
            onHide = {hide}
        >
            <Modal.Header >
                <Modal.Title>Add new Stage</Modal.Title>
            </Modal.Header>

            <Modal.Body>
            
            </Modal.Body>

            <Modal.Footer>
                
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewStageModal;