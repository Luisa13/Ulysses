import React, {useState, useEffect} from "react";
import {Button, Card, Col, Container, Row, OverlayTrigger, Tooltip} from 'react-bootstrap';
import toast, { Toaster } from 'react-hot-toast';

import { AuthContext } from '../domain/components/authContext';
import Pagination from 'react-bootstrap/Pagination';
import AddNewTripModal from "./use-cases/addTrip";
import ListItemTrips from "./components/listItemTrips";
import ConfirmationModal from './components/modals/deleteConfirmationModal';
import * as ApiService from '../util/ApiService';
import Trip from "../domain/entity/Trip";
import * as Provider from '../util/Provider';
import * as Util from '../util/Util';

  const ListTripsUser:React.FC = () =>{
    
    const{ userInfo, setUserInfo } = React.useContext(AuthContext);
    const [showModal, setShowModal] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [idTrip, setIdTrip] = useState(-1);
    const [updatedTrips, setUpdatedTrips] = useState<Trip[]>([]);
    //const history = useHistory();
    const blocUser = Provider.ProviderUsers();
    const blocTrip = Provider.ProviderTrips();


    useEffect( () =>{

        const token = localStorage.getItem("token");
        const initialData = async () => {
          try{
            const u = await ApiService.getUser(token as string)
            .then(user =>{
              setUpdatedTrips(user.trips);
            });
          }catch(error){
            console.log(error);
          }
        }
        initialData().then();

    }, [userInfo, showModal] );

    const handleShow = () =>{
      setShowModal(true);
    }

    const editTripHandler = () =>{
      setShowModal(true);
    }

    const deleteTripHandler = async (trip_id: number) =>{
        setIdTrip(trip_id);
        setShowDelete(true);
    }


    const deleteTrip = async (trip_id: number) => {
      const newListTrips = updatedTrips.filter(trip =>trip.id != trip_id);

      const user_obj = {
        id: userInfo?.id,
        name: userInfo?.name,
        surname: userInfo?.surname,
        email: userInfo?.email,
        password: userInfo?.password,
        role: userInfo?.role,
        trips: newListTrips
      }
      
      //await ApiService.updateUser(user_obj);
      blocUser.updateUser(user_obj);
      blocTrip.deleteTrip(trip_id)
        .then( res =>{
          setUpdatedTrips(newListTrips as Trip[]);
          toast.success("Trip removed!");
      });

      setShowDelete(false);

    }



    return (
        <>
          <Container>
            <Row><h1>My Trips</h1></Row>
            <Row className="justify-content-md-center">
            <Col>
            
              {
                  updatedTrips && updatedTrips.map( (trip:any) => (
                    
                    <Row>
                      <ListItemTrips
                        trip = {trip}
                        edit = {editTripHandler}
                        delete = {deleteTripHandler}
                      />
                    </Row>

                  ))
                }
                
            </Col>
          </Row>

          <Row>
            <Col xs = "2">
            <Button variant="primary" onClick={handleShow}>
              Add Trip
            </Button>
            </Col>
            <Col>
              <Pagination>
                <Pagination.First />
                <Pagination.Item >{1}</Pagination.Item>
                <Pagination.Last />
              </Pagination>
            </Col>
          </Row>
          
          <AddNewTripModal
            show = {showModal}
            hide = {() => setShowModal(false)}
          > </AddNewTripModal>

          <ConfirmationModal
            show = {showDelete}
            hide = {() => setShowDelete(false)}
            item = {"trip"}
            id = {idTrip}
            function = {deleteTrip}
          />
          
        <Toaster 
        position="bottom-right"
        reverseOrder={false}/>

      </Container>
    
        </>
      );
  };

  export default ListTripsUser;