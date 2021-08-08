 import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Card, Row} from 'react-bootstrap';
import ItemCard from './components/itemCardCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {PlusCircleFill} from 'react-bootstrap-icons';

import { AuthContext } from '../domain/components/authContext';
import { useLocation} from "react-router-dom";



const DetailTripStages: React.FC = () =>{
    const{ userInfo } = React.useContext(AuthContext);
    const idStage = useLocation().state;
    
    useEffect(() =>{

    });
    //const [index, setIndex] = useState(0);

    const handleSelect = () => {
        
    };
    //const state = props.location.state.stageName ;

    return(
        <Container >
            <Row><h1>{idStage as string}</h1></Row>
            <Row className="justify-content-md-center">
                    <Card>
                        <Card.Body>This is some text within a card body.</Card.Body>
                    </Card>
            </Row>
            <Row >
                    <AliceCarousel>
                        <ItemCard
                            title = "Stage 1"
                            address = "C/ blablablabla"
                            telephone = "958 131736"
                            mail = "example@domain.com"
                        />
                        <ItemCard
                            title = "Stage 2"
                            address = ""
                            telephone = ""
                            mail = "example@domain.com"
                        />
                    </AliceCarousel>
            </Row>
            <Row >
                <Col xs lg="2"><Button variant="light" href="#" ><PlusCircleFill color="royalblue"  size={50} /></Button></Col>
            </Row>
        </Container>

    );
}

export default DetailTripStages;