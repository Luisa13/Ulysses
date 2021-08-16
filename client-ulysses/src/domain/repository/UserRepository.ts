import IUserRepository from "./IUserRepository";
import User from '../entity/User'
import Trip from '../entity/Trip'



class UserDTO{
    id: number = 0;
    name: string = "";
    surname: string = "";
    email: string = "";
    password: string = "";
    role: string = "";
    trips: Trip[] = [];
}

export default class UserRepository implements IUserRepository{

    baseURL = "http://localhost:8080/user";

    async getUsers(): Promise<User[]>{
        const localUrl = this.baseURL + "/allusers";
        const response = await fetch(localUrl);
        const jsonData = await response.json();

        return jsonData.map((user: UserDTO) => new User(user.id, user.name, user.surname, user.email, user.password, user.role, user.trips));
    }

    // ====== UNDER CONSTRUCTION ======
    async updateUser(user:object): Promise<Response>{
        const localUrl = this.baseURL + "/updateuser";
        const response = await fetch(localUrl, {
          method: 'PUT',
          headers: {
            ...this.jsonHeader
          },
          body: JSON.stringify(user),
        });
        return response;
      }

    jsonHeader = {
        'Content-Type': 'application/json;'
    };
}