import Trip from "../entity/Trip";
import ITripRepository from "../repository/ITripRepository";

export interface ITripService{
    getTrips():Promise<Trip[]>;
    deleteTrip(id_trip: number): Promise<Response>
    createTrip(trip: object): Promise<Trip>
}

export default class TripService implements ITripService{
    tripRepo: ITripRepository;

    constructor(tripRepo: ITripRepository){
        this.tripRepo = tripRepo;
    }
    
    getTrips(): Promise<Trip[]> {
        return this.tripRepo.getTrips();
    }

    deleteTrip(id_trip: number): Promise<Response>{
        return this.tripRepo.deleteTrip(id_trip);
    }

    createTrip(trip: object): Promise<Trip>{
        return this.tripRepo.createTrip(trip)
    }

    updateTrip(trip:object): Promise<Response>{
        return this.tripRepo.updateTrip(trip);
    }

}