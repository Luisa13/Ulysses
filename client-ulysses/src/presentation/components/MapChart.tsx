import React from 'react';
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";

const MapChart: React.FC = () =>{

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
            </MapContainer>
            </div>
    );
}

export default MapChart;