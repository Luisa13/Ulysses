import React, {useState, useEffect} from 'react'
import { useLocation} from "react-router-dom";
import {Container, Row, Tabs, Tab} from 'react-bootstrap';


import Trip from "../../domain/entity/Trip";
import Stage from "../../domain/entity/Stage";
import DetailTripStages from '../detailTripStages';
import * as ApiService from '../../util/ApiService';
import * as Provider from '../../util/Provider';



const DetailTableTripStages: React.FC = () =>{
    const [key, setKey] = useState<string>('overview');
    const idTrip = useLocation().state;
    const [trip, setTrip] = useState<Trip>();
    const [stages, setStages] = useState<Stage[]>([]);
    const blocStage = Provider.ProviderStages(idTrip as number);
    const [updateState, setState] = useState(false); //DEPRECATED?

    useEffect(() =>{
        console.log("update the detail view");
        const token = localStorage.getItem("token");
        const fetchInitialData = async () => {
          try{
            const u = await ApiService.getUser(token as string)
            .then(user =>{
                const currentTrip = user.trips.filter(trip => trip.id === idTrip )[0];
                setTrip(currentTrip);
            });
          }catch(error){
            console.log(error);
          }
        }
        fetchInitialData().then();
        getStages();
        console.log("end of useEffect");
        

    }, [updateState]);

    const getStages = async ()=>{
        /*await blocStage.getStages()
        .then(res =>{
            console.log(res);
            setStages(res);
        })
        .catch(error =>{
            console.error("Error trying to fetch the stages: " + error);
        });*/
        const res = await blocStage.getStages();
        //console.log(res);
        setStages(res);

    }

    const handleSelect = async (keyEvent: any)=>{
        setKey(keyEvent);
    }


    return(
        <Container >
            <br/>
            <Row><h1>{trip?.name as string}</h1></Row>
            <Row className="justify-content-md-center">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={handleSelect}
                        className="mb-3"
                    >
                    <Tab eventKey="overview" title="Overview">
                        <DetailTripStages 
                            idTrip = {idTrip as number}
                            stages =  {stages}
                        />
                    </Tab>
                    <Tab eventKey="calendar" title="Calendar">
                        
                    </Tab>

                    </Tabs>
  
            </Row>
        </Container>
        
    );
}

export default DetailTableTripStages;
