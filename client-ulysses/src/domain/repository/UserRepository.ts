import IUserRepository from "./IUserRepository";
import User from '../entity/User'



class UserDTO{
    id: number = 0;
    name: string = "";
    surname: string = "";
}

export default class UserRepository implements IUserRepository{

    baseURL = "http://localhost:8080/user";

    async getUsers(): Promise<User[]>{
        const localUrl = this.baseURL + "/allusers";
        const response = await fetch(localUrl);
        const jsonData = await response.json();

        return jsonData.map((user: UserDTO) => new User(user.id, user.name, user.surname));
    }
}