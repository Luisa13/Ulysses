import UserService from "../domain/use-case/UserService";
import UserRepository from "../domain/repository/UserRepository"
import StageService from "../domain/use-case/StageService";
import StageRepository from "../domain/repository/StageRepository";

export function ProviderUsers(): UserService{
    const userRepository = new UserRepository();
    const userService = new UserService(userRepository);

    return userService;
}

export function ProviderStages(): StageService{
    const stageRepository = new StageRepository();
    const stageService = new StageService(stageRepository);

    return stageService;
}