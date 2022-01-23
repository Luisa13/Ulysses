import React, {useEffect, useState} from 'react';
import {Nav, Accordion, ListGroup, Button, Col, Container, Card, Row} from 'react-bootstrap';
import { CircleFill } from 'react-bootstrap-icons';
import Stage from "../../domain/entity/Stage";
import '../../style/generalStyle.css';


type IProp = {
    key: string;
    colorToggle: string;
    mainNote: string;
    description: string;
}

const ListNotesStage: React.FC<IProp> = (props) =>{

    /**
     *  <Row className = "itemBoxNotes">
                <Col xs={1}>
                   <CircleFill color="pink" size={15} />
                </Col>
                <Col>
                    Visit the cathedral.  Visit the cathedral.  Visit the cathedral.  Visit the cathedral. 
                </Col>
            </Row>
     */
    return(
        <Row className = "itemBoxNotes">
            <Accordion.Toggle as={Nav} eventKey={props.key}>
                <Col xs={1}>
                   <CircleFill color={props.colorToggle} size={15} />
                </Col>
                <Col>
                    {props.mainNote}
                </Col>
            </Accordion.Toggle>
            <Accordion.Collapse  eventKey={props.key}>
                <Card.Body>{props.description}</Card.Body>
            </Accordion.Collapse>
        </Row>


           


    );
}

export default ListNotesStage;