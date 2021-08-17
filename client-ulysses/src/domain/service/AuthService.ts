import IAuthRepository from '../repository/IAuthRepository';
import AuthRepository from '../repository/AuthRepository';
import User from '../entity/User';

export interface IAuthService{
    getUser(token: string): Promise<User>
    login(username:string, password: string):Promise<any>
    logout(): Promise<any>
}

export default class AuthService implements IAuthService{
    authRepo : IAuthRepository;
    
    constructor(authRepo: AuthRepository){
        this.authRepo = authRepo;
    }

    getUser(token: string): Promise<User>{
        return this.authRepo.getUser(token);
    }

    login(username:string, password: string):Promise<any>{
        return this.authRepo.login(username, password);
    }

    logout(): Promise<any>{
        return this.authRepo.logout();
    }
}
