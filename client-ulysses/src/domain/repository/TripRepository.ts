import Trip from '../entity/Trip'
import ITripRepository from './ITripRepository'
import User from '../entity/User'
import Stage from '../entity/Stage'

class TripDTO{
    id: number = 0;
    name: string = "";
    date: string = "";
    //users: Set<number> = new Set<number>();
    users: number[] = [];
    stages: Stage[] = [];
}

export default class TripRepository implements ITripRepository{
    baseURL = "http://localhost:8080/trip";
    async getTrips(): Promise<Trip[]> {
        const localURL = this.baseURL + "/allTrips";
        const response = await fetch(localURL);
        const jsonData = await response.json();

        return jsonData.map((trip: TripDTO) => new Trip(trip.id, trip.name, trip.date, trip.users, trip.stages));
    }
    
    
}