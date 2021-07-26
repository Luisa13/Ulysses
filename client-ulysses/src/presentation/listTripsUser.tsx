import React, {useState} from "react";
import {Button, Card, Col, Container, Table, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { Eye, PencilFill, Trash } from 'react-bootstrap-icons';

import { AuthContext } from '../domain/components/authContext';
import AddNewTripModal from "./use-cases/addTrip"


  const ListTripsUser = () =>{
    
    const{ userInfo } = React.useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () =>{
      setShowModal(true);
    }

    const geDateFormat = (dateStr: string):string => {
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const date = new Date(dateStr.toString());
      const dateFormat = date.getDay().toString() + " " 
      +  monthNames[date.getMonth()].toString() + " " 
      + date.getFullYear().toString();

      return dateFormat;
    }
  

    
    console.log(userInfo?.trips);
    const datestr = "" + userInfo?.trips[0].date;
    const date = new Date(datestr.toString());
    
    console.log( date.getUTCMonth() );


    return (
        <>
          <Container>
          <Row className="justify-content-md-center">
          <h3>Trip List</h3>
          <Col>
          <Card><Card.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Date</th>
                <th>Shared</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
    
              {
                userInfo?.trips.map( (trip:any)=>(
                  <tr key={trip.id}>
                      <td>{trip.name}</td>
                      <td>{geDateFormat(trip.date)}</td>
                      <td>{trip.stages.length} users</td>

                      <td>
                        <Button variant="light" href="#" ><Eye color="royalblue" size={25} /></Button>{' '}
                        <Button variant="light" href="#"><PencilFill color="royalblue" size={25} /></Button>{' '}
                        <Button variant="light" href="#"><Trash color="royalblue" size={25} /></Button>{' '}
                      </td>
                  </tr>
                ))
              }
            </tbody>
          </Table>
          <Button variant="primary" onClick={handleShow}>
            Add Trip
          </Button>
          </Card.Body></Card>
          </Col>
        </Row>
        
        <AddNewTripModal
          show = {showModal}
          hide = {() => setShowModal(false)}
        > </AddNewTripModal>

      </Container>
    
        </>
      );
  };

  export default ListTripsUser;