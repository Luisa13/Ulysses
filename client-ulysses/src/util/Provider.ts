import UserService from "../domain/service/UserService";
import UserRepository from "../domain/repository/UserRepository"
import StageService from "../domain/service/StageService";
import StageRepository from "../domain/repository/StageRepository";
import TripService from "../domain/service/TripService";
import TripRepository from "../domain/repository/TripRepository";
import AuthService from "../domain/service/AuthService";
import AuthRepository from "../domain/repository/AuthRepository";

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

export function ProviderTrips(): TripService{
    const tripRepository = new TripRepository();
    const tripService = new TripService(tripRepository);

    return tripService;
}

export function ProviderAuth(): AuthService{
    const authRepository = new AuthRepository();
    const authService = new AuthService(authRepository);

    return authService;
}