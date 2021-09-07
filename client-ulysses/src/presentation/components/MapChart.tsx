import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple, point } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import * as ApiService from '../../util/ApiService';
import PoinMap from '../../domain/entity/PointMap';
import PointMap from '../../domain/entity/PointMap';
import Stage from "../../domain/entity/Stage";

function createIcon(url: string) {
    return new L.Icon({
      iconUrl: markerIconPng
    });
  }


  type Props = {
      // nameStages: string
      nameStages: Stage[];
  }
const MapChart: React.FC<Props> = ({nameStages}) =>{
    const [points, setPoints] = useState<PoinMap[]>([]);
    

    useEffect(()=>{
        //nameStages.map(location =>{searchLocation(location)});
        //searchLocation(nameStages);
        
        const getLocationData = async() =>{
            if(nameStages.length >0)
                searchLocations(nameStages);
        }

        getLocationData().then();

    },[]);

    const searchLocations = async(stages: Stage[]) =>{
        stages.forEach( stage =>{
            const place = stage.place;
            ApiService.getCoordenatesFromAddress(place)
            .then(res =>{
                const point = new PoinMap(0, place, 1, res[0].lat, res[0].lon);
                const pointArr = [] as PointMap[];
                pointArr.push(point);
                setPoints(pointArr);     
            })
            .catch(error =>{
                console.error("Error trying to fetch location: " + error);
            });
        });
        
    }


    return(
        <div>
        <MapContainer
            className="markercluster-map"
            style={{ height: "18rem", width: "100%", opacity: "0.9" }}
            center={[51.0, 19.0]}
            zoom={4}
            maxZoom={18}
            >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {points.map((point, index) =>(
                <Marker
                    key = {index}
                    position = {[point.lat, point.lon]} 
                    icon = {createIcon("")} 
                >
                </Marker>  
            ))}
            
            </MapContainer>
            </div>
    );
}

export default MapChart;