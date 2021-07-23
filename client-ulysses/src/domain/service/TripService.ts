import Trip from "../entity/Trip";
import ITripRepository from "../repository/ITripRepository";

export interface ITripService{
    getTrips():Promise<Trip[]>;
}

export default class TripService implements ITripService{
    tripRepo: ITripRepository;

    constructor(tripRepo: ITripRepository){
        this.tripRepo = tripRepo;
    }
    
    getTrips(): Promise<Trip[]> {
        return this.tripRepo.getTrips();
    }

}