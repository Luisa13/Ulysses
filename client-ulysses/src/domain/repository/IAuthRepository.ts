import User from '../entity/User'

export default interface IAuthRepository{
    getUser(token: string): Promise<User>
    login(username:string, password: string):Promise<any>
    logout(): Promise<any>
}