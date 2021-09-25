 import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Card, Row} from 'react-bootstrap';
import ItemCard from './components/itemCardCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {PlusCircleFill} from 'react-bootstrap-icons';
import * as ApiService from '../util/ApiService';
import {PencilFill, Trash} from 'react-bootstrap-icons';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../domain/components/authContext';
import { useLocation} from "react-router-dom";
import Trip from "../domain/entity/Trip";
import Stage from "../domain/entity/Stage";
import AddNewStageModal from './use-cases/addStage';
import MapChart from './components/MapChart';
import * as Provider from '../util/Provider';



const DetailTripStages: React.FC = () =>{
    const{ userInfo } = React.useContext(AuthContext);
    const idTrip = useLocation().state;
    const [trip, setTrip] = useState<Trip>();
    const [stages, setStages] = useState<Stage[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [updateMap, setUpdateMap] = useState(false);
    const blocStage = Provider.ProviderStages(idTrip as number);

    useEffect(() =>{
        console.log("update the detail view");
        const token = localStorage.getItem("token");
        const fetchInitialData = async () => {
          try{
            const u = await ApiService.getUser(token as string)
            .then(user =>{
                const currentTrip = user.trips.filter(trip => trip.id === idTrip )[0];
                setTrip(currentTrip);
            });
          }catch(error){
            console.log(error);
          }
        }
        fetchInitialData().then();
        getStages();

    }, [showModal, updateMap]);

    

    const handleShowModal = () =>{
        setShowModal(true);
        setUpdateMap(true);
    }

    
    const getStages = async ()=>{
        await blocStage.getStages()
        .then(res =>{
            console.log(res);
            setStages(res);
        })
        .catch(error =>{
            console.error("Error trying to fetch the stages: " + error);
        });
    }

    const handleEditStage = () =>{
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

        setUpdateMap(true);
    }

   
    return(
        <Container >
            <br/>
            <Row><h1>{trip?.name as string}</h1></Row>
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
                            onChangeInput = {()=>{}}
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
                                            <Col xs lg="2"><Button variant="light" href="#" onClick = {()=>handleDeleteStage(stage.id)}>
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
                <Col xs lg="2"><Button variant="light" href="#" onClick = {handleShowModal}><PlusCircleFill color="royalblue"  size={50} /></Button></Col>
            </Row>


            <AddNewStageModal
                id_trip = {idTrip as number}
                show = {showModal}
                hide = {() => setShowModal(false)}
            ></AddNewStageModal>

            <Toaster 
                position="bottom-right"
                reverseOrder={false}/>

        </Container>

    );
}

export default DetailTripStages;