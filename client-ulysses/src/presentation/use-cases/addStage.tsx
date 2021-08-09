import React from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import ItemCard from '../components/itemCardCarousel'
import toast, { Toaster } from 'react-hot-toast';


type Props = {
    show: boolean
    hide: () => void
}

const AddNewStageModal: React.FC<Props> = ({ show, hide }) => {

    const handleAddStage = async () => {
        toast.success("New trip added!");
    }

    return (
        <Modal
            show={show}
            onHide={hide}
            size="xl"
        >
            <Modal.Header >
                <Modal.Title>Add a new Stage</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ItemCard
                    title=""
                    address=""
                    telephone=""
                    mail=""
                    edit={true}
                />

            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary" onClick={hide}>Cancel</Button>
                <Button variant="primary" onClick={handleAddStage}>Save changes</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default AddNewStageModal;