import React, {useEffect, useState} from 'react'
import {ListGroup, Button, Col, Container, Card, Row} from 'react-bootstrap';
import { CircleFill } from 'react-bootstrap-icons';
import Stage from "../../domain/entity/Stage";
import '../../style/generalStyle.css';



const ListNotesStage: React.FC = () =>{

    return(

            <Row className = "itemBoxNotes">
                <Col xs={1}>
                   <CircleFill color="pink" size={15} />
                </Col>
                <Col>
                    Visit the cathedral.  Visit the cathedral.  Visit the cathedral.  Visit the cathedral. 
                </Col>
            </Row>


    );
}

export default ListNotesStage;