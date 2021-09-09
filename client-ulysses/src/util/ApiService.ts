
//import Trip from "../domain/entity/Trip";
import User from "../domain/entity/User";
import Stage from "../domain/entity/Stage";
import { getPositionOfLineAndCharacter } from "typescript";
import PointMap from '../domain/entity/PointMap';

const API_BASE_URL = "http://localhost:8080";

export const login = async (username:string, password: string) => {

    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({"username": username , "password": password}),
        headers: {
            ...jsonHeader
          }
    });
    console.log("Response: " + response);
    return response.json();
};

export const jsonHeader = {
    'Content-Type': 'application/json;'
  };


export const getUser = async (token: string): Promise<User> => {
    const response = await fetch(`${API_BASE_URL}/auth/getCurrentUser`, {
      method: 'GET',
      headers: {
        "Authorization": token    
      }
    });
    return response.json();
  }

const getCoordenates = async (place: string):Promise<any> =>{
  console.log("Looking coordenates for place: " + place)
  const localURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + place;
  const response = await fetch(localURL);
  const jsonData = await response.json();
  return jsonData; 
}

export const getCoordenatesFromAddress = async (stages: Stage[]):Promise<any[]> =>{
  const promises = stages.map((stage) => getCoordenates(stage.place));
  const resp = await Promise.all(promises);
  return resp
}

export const getPointMaps = async (stages: Stage[]): Promise<PointMap[]> =>{
  const pointArr = [] as PointMap[];
  const coordinatesObj = await getCoordenatesFromAddress(stages);
  coordinatesObj.forEach(loc =>{
    const location = loc[0];
    const point = new PointMap(0, location.display_name, 1, location.lat, location.lon);
    pointArr.push(point);
  });
  return pointArr;
}


