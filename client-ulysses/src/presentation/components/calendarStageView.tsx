import React, {useEffect, useState} from 'react'
import {Button, Col, Container, Card, Row} from 'react-bootstrap';

import Stage from "../../domain/entity/Stage";

type Props = {
    stages: Stage[]
}

const CalendarStageView: React.FC<Props> = ({stages}) =>{

    return(
        <Container>
        </Container>
    );
}

export default CalendarStageView