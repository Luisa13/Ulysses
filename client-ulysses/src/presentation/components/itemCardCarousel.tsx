import React from 'react';
import {Button, Col, Container, Card, Row, Form, Navbar} from 'react-bootstrap';

import 'react-alice-carousel/lib/alice-carousel.css';
import {CalendarEvent, HouseDoor, Telephone, Envelope, PencilFill, Trash} from 'react-bootstrap-icons';


type Props = {
    title: string,
    //dateStart: Date,
    //dateEnd: Date
    address: string | "",
    telephone: string | "",
    mail: string | "example@domain.com",
}

const ItemCard : React.FC<Props> = ({title, address, mail, telephone})=>{
    return(
        
                            <Row>
                                <Col>
                                <Card style={{ height: '18rem' }}>
                                    <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/holiday-vacation-travel-concept-isometric-flat-design-holiday-vacation-travel-concept-isometric-flat-design-vector-145061752.jpg" />
                                </Card>
                                </Col>
                                <Col>
                                <Card style={{ height: '18rem' }}>
                                    <Card.Header>
                                        <Row>
                                            <Col md={4}> <Card.Title>{title}</Card.Title></Col>
                                            <Col md={{ span: 4, offset: 4 }}> <CalendarEvent color="black" size={25} /> </Col>
                                        </Row>
                                    </Card.Header>
                                    <Card.Body>

                                    <Form>
                                    <Row className="align-items-center">
                                        <Col xs="auto" className="my-1">
                                            <Form.Group as={Row} className="mb-3">
                                                <Form.Label column sm="1">
                                                    <Envelope color="royalblue" size={25} />
                                                </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control plaintext readOnly defaultValue={mail} />
                                                </Col>

                                                <Form.Label column sm="1">
                                                    <Telephone color="royalblue" size={25} />
                                                </Form.Label>
                                                <Col sm="5">
                                                    <Form.Control plaintext readOnly defaultValue={telephone} />
                                                </Col>
                                            </Form.Group>
                                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                                <Form.Label column sm="1">
                                                    <HouseDoor color="royalblue" size={25} />
                                                </Form.Label>
                                                <Col sm="10">
                                                    <Form.Control plaintext readOnly defaultValue={address} />
                                                </Col>
                                            </Form.Group>
                                        </Col>
                                    </Row>
                                    </Form>
                                        
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <Row className="justify-content-md-center">
                                        <Col xs lg="2"><Button variant="light" href="#"><PencilFill color="royalblue" size={25} /></Button></Col>
                                        <Col xs lg="2"><Button variant="light" href="#"><Trash color="royalblue"  size={25} /></Button></Col>
                                        </Row>
                                    </Card.Footer>
                                    </Card>
                                </Col>
                            </Row>
                  
    );
}

export default ItemCard;