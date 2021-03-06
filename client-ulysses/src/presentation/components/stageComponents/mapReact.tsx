import React, { useEffect, useState } from 'react';
import {ComposableMap, Geographies, Geography, Marker, Point} from "react-simple-maps";
import Geocode from "react-geocode";
import PointMap from "../../../domain/entity/PointMap";
  
const geoUrl =
"https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";
/**
 * ============================================
 * ===============  DEPRECATED  ===============
 * ============================================
*/
/*const markers = [
{
  markerOffset: -30,
  name: "Buenos Aires",
  coordinates: [-58.3816, -34.6037]
},
{ markerOffset: 15, name: "La Paz", coordinates: [-68.1193, -16.4897] },
{ markerOffset: 15, name: "Brasilia", coordinates: [-47.8825, -15.7942] },
{ markerOffset: 15, name: "Santiago", coordinates: [-70.6693, -33.4489] },
{ markerOffset: 15, name: "Bogota", coordinates: [-74.0721, 4.711] },
{ markerOffset: 15, name: "Quito", coordinates: [-78.4678, -0.1807] },
{ markerOffset: -30, name: "Georgetown", coordinates: [-58.1551, 6.8013] },
{ markerOffset: -30, name: "Asuncion", coordinates: [-57.5759, -25.2637] },
{ markerOffset: 15, name: "Paramaribo", coordinates: [-55.2038, 5.852] },
{ markerOffset: 15, name: "Montevideo", coordinates: [-56.1645, -34.9011] },
{ markerOffset: 15, name: "Caracas", coordinates: [-66.9036, 10.4806] },
{ markerOffset: 15, name: "Lima", coordinates: [-77.0428, -12.0464] }
];*/

/*type Props = {
  placeName: string;
}
const MapReact: React.FC<Props> = ({placeName}) =>{
  
  const [markers, setMarkers] = useState< PointMap[] >([]);

  useEffect(()=>{
    console.log("Looking for " + placeName);
    getCoordinates();
  }, [markers]); 

  const getCoordinates = async ()=>{
    Geocode.fromAddress(placeName)
    .then( response =>{
      const { lat, lng } = response.results[0].geometry.location;
      console.log(lat, lng);
      const coords = [lat, lng] as number[];
      const pointMarker = new PointMap(placeName, -30, coords);
      setMarkers([pointMarker]);
    })
    .catch(ex =>{
      console.error(ex);
    });

  
  }
  

    return(
        <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [58, 20, 0],
          scale: 400
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .filter(d => d.properties.REGION_UN === "Americas")
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#EAEAEC"
                stroke="#D6D6DA"
              />
            ))
        }
      </Geographies>
      {markers && markers.map(({ name, coordinates, markerOffset }) => (
        <Marker key={name} coordinates={coordinates as Point}>
          <g
            fill="none"
            stroke="#FF5533"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(-12, -24)"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 6.9 8 11.7z" />
          </g>
          <text
            textAnchor="middle"
            y={markerOffset}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
    );
}

export default MapReact;*/