import IAuthRepository from './IAuthRepository';
import User from '../entity/User'

export default class AuthRepository implements IAuthRepository{
    baseURL = "http://localhost:8080/auth";

    async getUser(token: string): Promise<User>{
        const response = await fetch(`${this.baseURL}/getCurrentUser`, {
            method: 'GET',
            headers: {
              "Authorization": token    
            }
          });
          return response.json();
    }

    async login(username:string, password: string):Promise<any>{
        const response = await fetch(`${this.baseURL}/signin`, {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify({"username": username , "password": password}),
            headers: {
                ...this.jsonHeader
              }
        });
        return response.json();
    }

    async logout(): Promise<any>{
        console.log("Not implemented yet!");
    }

    jsonHeader = {
        'Content-Type': 'application/json;'
      };

}