import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, Card, Col, Container, Table, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import { AppIndicator, Eye, PencilFill, Trash } from 'react-bootstrap-icons';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../domain/components/authContext';
import AddNewTripModal from "./use-cases/addTrip"
import * as ApiService from '../util/ApiService';

  const ListTripsUser = () =>{
    
    const{ userInfo } = React.useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const history = useHistory();

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

    const goToDetail = () =>{
      history.push({pathname: "detailTripStages"});
    }

    const deleteTrip = async (trip_id: number) => {
      const newListTrips = userInfo?.trips.filter(trip =>trip.id != trip_id);

      const user_obj = {
        id: userInfo?.id,
        name: userInfo?.name,
        surname: userInfo?.surname,
        email: userInfo?.email,
        password: userInfo?.password,
        role: userInfo?.role,
        trips: newListTrips
      }
      await ApiService.updateUser(user_obj).then( res =>{
        const response =  ApiService.deleteTrip(trip_id);
      });
      
      toast.success("Trip removed!");
    }
  

    return (
        <>
          <Container>
          <Row><h1>Trip List</h1></Row>
          <Row className="justify-content-md-center">
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
                        <Button variant="light" href="#"  onClick ={goToDetail}><Eye color="royalblue" size={25} /></Button>{' '}
                        <Button variant="light" href="#"><PencilFill color="royalblue" size={25} /></Button>{' '}
                        <Button variant="light" href="#"><Trash color="royalblue" onClick = {()=>deleteTrip(trip.id)} size={25} /></Button>{' '}
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
      <Toaster 
      position="bottom-right"
      reverseOrder={false}/>

      </Container>
    
        </>
      );
  };

  export default ListTripsUser;