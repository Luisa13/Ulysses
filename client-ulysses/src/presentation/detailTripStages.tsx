 import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Card, Row} from 'react-bootstrap';
import ItemCard from './components/itemCardCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {PlusCircleFill} from 'react-bootstrap-icons';
import * as ApiService from '../util/ApiService';
import {PencilFill, Trash} from 'react-bootstrap-icons';

import { AuthContext } from '../domain/components/authContext';
import { useLocation} from "react-router-dom";
import Trip from "../domain/entity/Trip";
import AddNewStageModal from './use-cases/addStage';
import Map from './components/map';



const DetailTripStages: React.FC = () =>{
    const{ userInfo } = React.useContext(AuthContext);
    const idTrip = useLocation().state;
    const [trip, setTrip] = useState<Trip>();
    const [showModal, setShowModal] = useState(false);

    useEffect(() =>{
        const token = localStorage.getItem("token");
        const initialData = async () => {
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
        initialData().then();
    });

    const handleShowModal = () =>{
        setShowModal(true);
      }
    

    const handleSelect = () => {
        
    };
   
    return(
        <Container >
            <Row><h1>{trip?.name as string}</h1></Row>
            <Row className="justify-content-md-center">
                    <Card style={{ height: '18rem' }}>
                        <Map
                            placeName = {trip?.name as string}
                        />
                    </Card>
            </Row>
            <br/>
            <Row >
                    <AliceCarousel>
                        <>
                        <ItemCard
                            title = "Stage 1"
                            address = "C/ blablablabla"
                            telephone = "958 131736"
                            mail = "example@domain.com"
                            edit = {false}
                        />
                        <Row>
                            <Col></Col>
                            <Col>
                                <Card>
                                    <Card.Footer>
                                        <Row className="justify-content-md-center">
                                            <Col xs lg="2"><Button variant="light" href="#" ><PencilFill color="royalblue" size={25} /></Button></Col>
                                            <Col xs lg="2"><Button variant="light" href="#" ><Trash color="royalblue"  size={25} /></Button></Col>
                                        </Row>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        </Row>
                                    </>
                        <ItemCard
                            title = "Stage 2"
                            address = ""
                            telephone = ""
                            mail = "example@domain.com"
                            edit = {false}
                        />
                    </AliceCarousel>
            </Row>
            <Row >
                <Col xs lg="2"><Button variant="light" href="#" onClick = {handleShowModal}><PlusCircleFill color="royalblue"  size={50} /></Button></Col>
            </Row>


            <AddNewStageModal
                show = {showModal}
                hide = {() => setShowModal(false)}
            ></AddNewStageModal>

        </Container>

    );
}

export default DetailTripStages;