
//import Trip from "../domain/entity/Trip";
import User from "../domain/entity/User";
import Stage from "../domain/entity/Stage";
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


