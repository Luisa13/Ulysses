import React, {useState} from 'react';
import { Button, Container, Row, Col, Modal } from 'react-bootstrap';
import ItemCard from '../components/itemCardCarousel'
import toast, { Toaster } from 'react-hot-toast';
import Stage from '../../domain/entity/Stage';
import * as Provider from '../../util/Provider';


type Props = {
    show: boolean
    hide: () => void
}

const AddNewStageModal: React.FC<Props> = ({ show, hide }) => {
    const blocStage = Provider.ProviderStages();
    const blocTrip = Provider.ProviderTrips();
    const[state, setState] = useState({place: "", dateIn: new Date(), dateOut: new Date()});

    
    const handlerOnFormChange = async (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        if(name in state){
            setState((prev)=>({
                ...prev,
                [name]: value
            }));
        }
    }

    const handleAddStage = async () => {
        const newStage = new Stage(1, state.place, state.dateIn, state.dateOut);
        blocStage.createNewStage(newStage);
        toast.success("New stage added to trip!");
        show = false;
        await hide();
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
                    place=""
                    address=""
                    telephone=""
                    mail=""
                    edit={true}
                    onChangeInput = {handlerOnFormChange}
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