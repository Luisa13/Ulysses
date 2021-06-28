import Trip from '../entity/Trip'

export default interface ITripRepository{
    getTrips():Promise<Trip[]>
}