
//import Trip from "../domain/entity/Trip";
import User from "../domain/entity/User";

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

export const getCoordenatesFromAddress = async (place: string):Promise<any> =>{
  const localURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + place;
  const response = await fetch(localURL);
  const jsonData = await response.json();
  return jsonData; 
}


  /*export const updateUser = async (user:object) =>{
    const response = await fetch(`${API_BASE_URL}/user/updateuser`, {
      method: 'PUT',
      headers: {
        ...jsonHeader
      },
      body: JSON.stringify(user),
    });
    return response;
  }*/


 /* export const createTrip = async (trip: object): Promise<Trip> =>{
    const response = await fetch(`${API_BASE_URL}/trip/`, {
      method: 'POST',
      headers: {
        ...jsonHeader
      },
      body: JSON.stringify(trip),
    });

    return response.json();
  }*/


 /* export const deleteTrip = async (id_trip: number) =>{
    const response = await fetch(`${API_BASE_URL}/trip/${id_trip}`, {
      method: 'DELETE',
      headers: {
        ...jsonHeader
      },
    });

    return response;
  }*/

