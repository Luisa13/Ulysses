import React from 'react';
import { Button, Col, Container, Card, Row, Form, Navbar } from 'react-bootstrap';

import 'react-alice-carousel/lib/alice-carousel.css';
import { CalendarEvent, HouseDoor, Telephone, Envelope, PencilFill, Trash } from 'react-bootstrap-icons';
import toast, { Toaster } from 'react-hot-toast';
import * as Util from '../../util/Util';


type Props = {
    place: string,
    dateStart: Date,
    dateEnd: Date
    address: string | "",
    telephone: string | "",
    mail: string | "example@domain.com",
    edit: boolean | false,
    onChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const ItemCard: React.FC<Props> = ({ edit, place, address, mail, telephone, dateStart, dateEnd, onChangeInput}) => {

    /*const handleDeleteStage = async () => {
        console.log("deleting stage");
        await toast.success("Stage deleted");
    }

    const handleEditStage = () => {
        console.log("modifying stage");
    }*/

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
                            <Col md={5}> 
                            <Card.Title>
                                <Form.Control onChange = {onChangeInput} name = "place" type={edit ? "text" : ""} 
                                readOnly={!edit} plaintext={!edit} placeholder="Place"  defaultValue={place}/>
                            </Card.Title>
                            </Col>
                            <Col>
                                <Row>
                                    <Form.Label column sm="1"><CalendarEvent color="black" size={25} /> </Form.Label>
                                    <Col>
                                        <Row >
                                            <Col md={6}><Form.Control onChange = {onChangeInput} name = "dateIn" type={edit ? "date" : ""} 
                                            readOnly={!edit} plaintext={!edit} placeholder="StartDate" defaultValue={Util.geDateFormat(dateStart.toString())}/> </Col>

                                            <Col md={6}><Form.Control onChange = {onChangeInput} name = "dateOut" type={edit ? "date" : ""} 
                                            readOnly={!edit} plaintext={!edit} placeholder="EndDate" defaultValue={Util.geDateFormat(dateEnd.toString())}/></Col>
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
                                            <Form.Control onChange = {onChangeInput} name = "email" type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={mail} />
                                        </Col>

                                        <Form.Label column sm="1">
                                            <Telephone color="royalblue" size={25} />
                                        </Form.Label>
                                        <Col sm="5">
                                            <Form.Control onChange = {onChangeInput} name = "telephone" type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={telephone} />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                                        <Col sm="1">
                                            <Form.Label column sm="1">
                                                <HouseDoor color="royalblue" size={25} />
                                            </Form.Label>
                                        </Col>
                                        <Col sm="10">
                                            <Form.Control onChange = {onChangeInput} name = "place" type={edit ? "" : "text"} readOnly={!edit} plaintext={!edit} defaultValue={address} />
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