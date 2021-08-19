import Trip from '../entity/Trip'
import ITripRepository from './ITripRepository'
import User from '../entity/User'
import Stage from '../entity/Stage'

class TripDTO{
    id: number = 0;
    name: string = "";
    date: string = "";
    users: number[] = [];
    //stages: Stage[] = [];
}

export default class TripRepository implements ITripRepository{
    baseURL = "http://localhost:8080/trip";

    async getTrips(): Promise<Trip[]> {
        const localURL = this.baseURL + "/allTrips";
        const response = await fetch(localURL);
        const jsonData = await response.json();

        return jsonData.map((trip: TripDTO) => new Trip(trip.id, trip.name, trip.date, trip.users));
    }

    async deleteTrip(id_trip: number): Promise<Response>{
        const response = await fetch(`${this.baseURL}/${id_trip}`, {
          method: 'DELETE',
          headers: {
            ...this.jsonHeader
          },
        });
    
        return response;
    }

    async createTrip(trip: object): Promise<Trip>{
        const response = await fetch(`${this.baseURL}/`, {
          method: 'POST',
          headers: {
            ...this.jsonHeader
          },
          body: JSON.stringify(trip),
        });
    
        return response.json();
      }

    async updateTrip(trip: object): Promise<Response>{
      const localUrl = this.baseURL + "/updateTrip";
        const response = await fetch(localUrl, {
          method: 'PUT',
          headers: {
            ...this.jsonHeader
          },
          body: JSON.stringify(trip),
        });
        return response;
      }


    jsonHeader = {
        'Content-Type': 'application/json;'
    };
    
}