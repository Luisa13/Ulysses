import React, {useState} from "react";
import {Button, Col, Container, Form, Row} from 'react-bootstrap';
import { Link } from "react-router-dom";
import { AuthContext } from '../domain/components/authContext';
import AddNewTripModal from "./use-cases/addTrip"


  const ListTripsUser = () =>{
    
    const{ userInfo } = React.useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const handleShow = () =>{
      setShowModal(true);
    }

    return (
        <>
          <div className="inner">
          <Container fluid className="Login mt-5">
          <Row>
          <h3>Trip List</h3>
          <Col>
          <table>
            <thead>{userInfo?.name} Trips</thead>
            <body>
              {
                userInfo?.trips.map( (trip:any )=>
                    <tr key={trip.id}>
                      <td>{trip.name}</td>
                    </tr>
                )
              }
            </body>
          </table>
          <Button variant="primary" onClick={handleShow}>
            Add Trip
          </Button>
          </Col>
        </Row>
        
        <AddNewTripModal
          show = {showModal}
          hide = {() => setShowModal(false)}
        > </AddNewTripModal>

      </Container>
    </div>
        </>
      );
  };

  export default ListTripsUser;