import React, {useEffect, useState} from 'react';
import {Nav, Accordion, ListGroup, Button, Col, Container, Card, Row} from 'react-bootstrap';
import { CircleFill } from 'react-bootstrap-icons';
import Stage from "../../domain/entity/Stage";
import '../../style/generalStyle.css';


type IProp = {
    itemKey: string;
    colorToggle: string;
    mainNote: string;
    description: string;
}

const ListNotesStage: React.FC<IProp> = (props) =>{


    return(
        <Row className = "itemBoxNotes">
            <Accordion.Toggle as={Nav} eventKey={props.itemKey}>
                <Col xs={1}>
                   <CircleFill color={props.colorToggle} size={15} />
                </Col>
                <Col>
                    {props.mainNote}
                </Col>
            </Accordion.Toggle>
            <Accordion.Collapse  eventKey={props.itemKey}>
                <Card.Body>{props.description}</Card.Body>
            </Accordion.Collapse>
        </Row>


           


    );
}

export default ListNotesStage;