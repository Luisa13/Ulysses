import React from 'react';
import { Button, Col, Container, Card, Row, Form, Navbar } from 'react-bootstrap';

import 'react-alice-carousel/lib/alice-carousel.css';
import { CalendarEvent, HouseDoor, Telephone, Envelope, PencilFill, Trash } from 'react-bootstrap-icons';
import toast, { Toaster } from 'react-hot-toast';


type Props = {
    title: string,
    //dateStart: Date,
    //dateEnd: Date
    address: string | "",
    telephone: string | "",
    mail: string | "example@domain.com",
    edit: boolean | false
}

const ItemCard: React.FC<Props> = ({ edit, title, address, mail, telephone }) => {

    const handleDeleteStage = async () => {
        console.log("deleting stage");
        await toast.success("Stage deleted");
    }

    const handleEditStage = () => {
        console.log("modifying stage");
    }


    return (

        <Row>
            <Col>
                <Card style={{ height: '15rem' }}>
                    <Card.Img variant="top" src="" />
                </Card>
            </Col>
            <Col>
                <Card style={{ height: '15rem' }}>
                    <Card.Header>
                        <Row>
                            <Col md={5}> <Card.Title>{title}</Card.Title></Col>
                            <Col>
                                <Row>
                                    <Form.Label column sm="1"><CalendarEvent color="black" size={25} /> </Form.Label>
                                    <Col>
                                        <Row>
                                            <Col md={6}><Form.Control type={edit ? "date" : ""} readOnly={!edit} plaintext={!edit} name="date" placeholder="StartDate" /> </Col>

                                            <Col md={6}><Form.Control type={edit ? "date" : ""} readOnly={!edit} plaintext={!edit} name="date" placeholder="EndDate" /></Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
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
                                            <Form.Control type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={mail} />
                                        </Col>

                                        <Form.Label column sm="1">
                                            <Telephone color="royalblue" size={25} />
                                        </Form.Label>
                                        <Col sm="5">
                                            <Form.Control type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={telephone} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Col sm="1">
                                            <Form.Label column sm="1">
                                                <HouseDoor color="royalblue" size={25} />
                                            </Form.Label>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Control type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={address} />
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

                </Card>
            </Col>
        </Row>

    );
}

export default ItemCard;