import Trip from '../entity/Trip'

export default interface ITripRepository{
    getTrips():Promise<Trip[]>
    deleteTrip(id_trip: number): Promise<Response>
    createTrip(trip: object): Promise<Trip>
    updateTrip(trip: object): Promise<Response>
}