import React from 'react'
import {Modal, Button} from 'react-bootstrap';

type IProps = {
    show: boolean,
    hide: () => void,
    item: string,
    id: number
    function(id:number):void
}

const ConfirmationModal: React.FC<IProps> = (props) =>{


    return(
        <Modal
            show={props.show}
            onHide={props.hide}>
            <Modal.Header>
                <Modal.Title>Delete {props.item}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete this?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick = {props.hide}>Cancel</Button>
                <Button variant="primary" onClick = {()=>props.function(props.id)}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ConfirmationModal;

