import UserService from "../domain/use-case/UserService";
import UserRepository from "../domain/repository/UserRepository"
import StageService from "../domain/use-case/StageService";
import StageRepository from "../domain/repository/StageRepository";
import TripService from "../domain/use-case/TripService";
import TripRepository from "../domain/repository/TripRepository";

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