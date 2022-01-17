import React, {useState} from 'react';
import { Button, Container, Row, Col, Modal, ToastBody } from 'react-bootstrap';
import ItemCard from '../components/itemCardCarousel'
import toast, { Toaster } from 'react-hot-toast';
import Stage from '../../domain/entity/Stage';
import Trip from '../../domain/entity/Trip';
import * as Provider from '../../util/Provider';


type Props = {
    id_trip: number 
    show: boolean
    hide: () => void
}

const AddNewStageModal: React.FC<Props> = ({ id_trip, show, hide }) => {
    const blocStage = Provider.ProviderStages(id_trip);
    //const blocTrip = Provider.ProviderTrips();
    //TODO: Improve design of this --> model in a type
    const[state, setState] = useState({place: "", dateIn: new Date(), dateOut: new Date(), accomodation: "", phone: "", email: "",  description: "", image: ""}); 
    const [base64Str, setBase64Str] = useState<string>("");

    
    const handlerOnFormChange = async (event: React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = event.target;
        const files = event.target.files;
        if(files){
            const reader = new FileReader();
            reader.readAsBinaryString(files[0]);
            reader.onload = _onLoadImage;
        }
        if(name in state){
            setState((prev)=>({
                ...prev,
                [name]: value
            }));
        }
    }

    const _onLoadImage = (readerEvt: any) =>{
        setBase64Str(btoa(readerEvt.target.result as string));
    }

    const handleAddStage = async () => {
        const newStage = new Stage(1, state.place, state.dateIn, state.dateOut, state.accomodation, state.phone, state.email, base64Str, state.description);
        blocStage.createNewStage(newStage)
        .then(res =>{
            toast.success("New stage added to trip!");
        })
        .catch(error =>{
            toast.error("Something wrong happen trying to add a stage.");
        });
        
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
                    dateStart = {new Date()}
                    dateEnd = {new Date()}
                    edit={true}
                    image = ""
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