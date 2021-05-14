import User from '../entity/User';
import IUserRepository from '../repository/IUserRepository';


export interface IUserService{
    getUsers():Promise<User[]>;
}

export default class UserService implements IUserService{

    userRepo: IUserRepository;

    constructor(ur: IUserRepository){
        this.userRepo = ur;
    }

    async getUsers():Promise<User[]>{
        return this.userRepo.getUsers();
    }
}