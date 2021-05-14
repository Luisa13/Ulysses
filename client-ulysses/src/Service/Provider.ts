import UserService from "../domain/use-case/UserService";
import UserRepository from "../domain/repository/UserRepository"

export function ProviderUsers(): UserService{
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    return userService;
}