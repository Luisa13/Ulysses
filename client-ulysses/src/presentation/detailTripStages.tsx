 import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Card, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import ItemCard from './components/itemCardCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {PlusCircleFill} from 'react-bootstrap-icons';
import * as ApiService from '../util/ApiService';
import {PencilFill, Trash} from 'react-bootstrap-icons';
import toast, { Toaster } from 'react-hot-toast';
import ConfirmationModal from './components/modals/deleteConfirmationModal';

import { AuthContext } from '../domain/components/authContext';
import { useLocation} from "react-router-dom";
import Trip from "../domain/entity/Trip";
import Stage from "../domain/entity/Stage";
import AddNewStageModal from './use-cases/addStage';
import MapChart from './components/MapChart';
import * as Provider from '../util/Provider';


type Props = {
    idTrip: number
    stages: Stage[]
}

const DetailTripStages: React.FC<Props> = ({idTrip, stages}) =>{
    const{ userInfo } = React.useContext(AuthContext);
    const [showDelete, setShowDelete] = useState(false);
    const [idStage, setIdStage] = useState(-1);
    //const idTrip = useLocation().state;                 // DEPRECATED??
    //const [trip, setTrip] = useState<Trip>();           // DEPRECATED
    //const [stages, setStages] = useState<Stage[]>([]); // DEPRECATED
    const [showModal, setShowModal] = useState(false);
    const [updateMap, setUpdateMap] = useState(false);
    const [updateState, setState] = useState(false);//useStateWithCallbackLazy(false);//useState(false);
    const blocStage = Provider.ProviderStages(idTrip);

    useEffect(() =>{

    }, [showModal, updateState]);

    

    const deleteStage = async(stage_id: number) =>{
        setIdStage(stage_id);
        setShowDelete(true);
    }

    const handleShowModal = () =>{
        setShowModal(true);
        setState(true);
        setUpdateMap(true);
    }


    const handleEditStage = () =>{
        //setShowModal(true);
        // To be implemented
    }

    const handleDeleteStage = async (stage_id: number) =>{
        await blocStage.deleteStage(stage_id)
        .then(res =>{
            if(res.status === 200)
                toast.success("A stage has been deleted");
        })
        .catch(error =>{
            console.error("Error trying to delete a stage: " + error);
        });
        //// WATCH OUT :  render the map
        /*setState(true, ()=>{
            setUpdateMap(true);
        });*/

        setShowDelete(false);
        
    }

   
    return(
        <Container >
            <br/>
            <Row></Row>
            <Row className="justify-content-md-center">
                    <Card style={{ height: '18rem' }}>
                        {stages.length && 
                        <MapChart
                            nameStages = {stages}
                            update = {updateMap}
                        />}
                    </Card>
            </Row>
            <br/>
            <Row >
                    <AliceCarousel >
                        {stages && stages.map( (stage) =>(
                            <>
                            <ItemCard
                                place = {stage.place}
                                address = {stage.accomodation}
                                telephone = {stage.phone}
                                mail = {stage.email}
                                dateStart = {stage.startDate}
                                dateEnd = {stage.endDate}
                                image = {stage.imageBase64}
                                edit = {false}
                                onChangeInput = {()=>{}} //When the slide passes over
                        />
                        <Row>
                            <Col></Col>
                            <Col sm={7}>
                                <Card>
                                    <Card.Footer>
                                        <Row className="justify-content-md-center">
                                            <Col xs lg="2"><Button variant="light" href="#" onClick = {handleEditStage}>
                                                <PencilFill color="royalblue" size={25} />
                                            </Button></Col>
                                            <Col xs lg="2"><Button variant="light" href="#" onClick = {()=>deleteStage(stage.id)}>
                                                <Trash color="royalblue"  size={25} />
                                            </Button></Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                        </>
                        )
                        )}
                        
                    </AliceCarousel>
            </Row>
            <Row >
                <Col xs lg="2">
                <OverlayTrigger overlay={<Tooltip id="tooltip-new-stage">Add a new Stage!</Tooltip>}>
                    <Button variant="light" href="#" onClick = {handleShowModal}><PlusCircleFill color="royalblue"  size={50} /></Button>
                </OverlayTrigger>
                </Col>
                    
            </Row>


            <AddNewStageModal
                id_trip = {idTrip as number}
                show = {showModal}
                hide = {() => setShowModal(false)}
            ></AddNewStageModal>

            <ConfirmationModal
                show = {showDelete}
                hide = {() => setShowDelete(false)}
                item = {"stage"}
                id = {idStage}
                function = {handleDeleteStage}
            />

            <Toaster 
                position="bottom-right"
                reverseOrder={false}/>

        </Container>

    );
}

export default DetailTripStages;