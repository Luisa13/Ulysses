import User from '../entity/User'

export default interface IUserRepository{
    getUsers():Promise<User[]>
    updateUser(user:object): Promise<Response>
}