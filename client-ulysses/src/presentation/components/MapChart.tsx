import React, { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import L, { LatLngTuple, point } from 'leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

import PointMap from '../../domain/entity/PointMap';
import Stage from "../../domain/entity/Stage";

import * as Provider from "../../util/Provider";

function createIcon(url: string) {
    return new L.Icon({
      iconUrl: markerIconPng
    });
}


type Props = {
      nameStages: Stage[];
      update:boolean;
}

const MapChart: React.FC<Props> = ({nameStages, update}) =>{
    const [points, setPoints] = useState<PointMap[]>([]);

    useEffect(()=>{
        searchLocations(nameStages);
        console.log("Updating the map");
    },[update]);

    const searchLocations = async(stages: Stage[]) =>{
        const pointsProvider = Provider.ProviderMapPoints();
        const coordenates = await pointsProvider.getPointMaps(stages);
        setPoints(coordenates);
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
            {points.length && points.map((point, index) =>(
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