import React, {useEffect, useState} from 'react';
import {useHistory, Link, Route} from "react-router-dom";
import {Button, Col, Container, Card, Row} from 'react-bootstrap';
import {Eye, PencilFill, Trash } from 'react-bootstrap-icons';
import Image from 'react-bootstrap/Image';

import Trip from '../../domain/entity/Trip';
import * as Provider from '../../util/Provider';
import * as Util from '../../util/Util';

type Props = {
    trip: Trip;
    delete(id: number):void;
}

const ListItemTrips: React.FC<Props> = (props) =>{

    const blocUser = Provider.ProviderUsers();
    const blocTrip = Provider.ProviderTrips();

    

    
    return(
        <Card>
            <Card.Body>
                <Row>
                    <Col xs={2}>
                        <Image roundedCircle = {true}></Image>
                    </Col>
                    <Col>
                        <Card.Title>{props.trip.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">n stages</Card.Subtitle>
                    </Col>
                    <Col>
                        {Util.geDateFormat(props.trip.date)}
                    </Col> 
                    <Col>
                        <Link to={{
                            pathname:`/detailTableTripStages/`,
                            state: props.trip.id
                            }}><Eye color="royalblue" size={25} />
                        </Link>
                        <Button variant="light" href="#"><PencilFill color="royalblue" size={25} /></Button>{' '}
                        <Button variant="light" href="#"><Trash color="royalblue" onClick = {()=>props.delete(props.trip.id)} size={25} /></Button>{' '}
                    </Col> 
                </Row>
            </Card.Body>
        </Card>
      );
}

export default ListItemTrips;