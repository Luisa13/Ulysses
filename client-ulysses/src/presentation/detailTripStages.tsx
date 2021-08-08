 import React, {useState} from 'react'
import {Button, Col, Container, Card, Row} from 'react-bootstrap';
import ItemCard from './components/itemCardCarousel';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Calendar} from 'react-bootstrap-icons';

import { AuthContext } from '../domain/components/authContext';

type Props = {
    stageName: string | "Trip's name"
}
const DetailTripStages: React.FC<Props> = ({stageName}) =>{
    const{ userInfo } = React.useContext(AuthContext);

    //const [index, setIndex] = useState(0);

    const handleSelect = () => {
        
    };

    return(
        <Container >
            <Row><h1>{stageName}</h1></Row>
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
        </Container>
    );
}

export default DetailTripStages;