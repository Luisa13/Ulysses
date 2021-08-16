import User from '../entity/User';
import IUserRepository from '../repository/IUserRepository';


export interface IUserService{
    getUsers():Promise<User[]>;
    updateUser(user:object): Promise<Response>
}

export default class UserService implements IUserService{

    userRepo: IUserRepository;

    constructor(ur: IUserRepository){
        this.userRepo = ur;
    }

    async getUsers():Promise<User[]>{
        return this.userRepo.getUsers();
    }

    async updateUser(user:object): Promise<Response>{
        return this.userRepo.updateUser(user);
    }
}