import React, {useState} from "react";
import * as Provider from "../util/Provider";
import Trip from "../domain/entity/Trip";

const ListTrips: React.FC = () =>{
    const bloc = Provider.ProviderTrips();
    const [trips, setTrips] = useState(Array<Trip>());
    bloc.getTrips()
    .then( res =>{
        setTrips(res);
    });

    return(<table>
        <thead>
            <tr>
                <th>PLACE</th>
            </tr>
        </thead>
        <tbody>
            {
                trips.map(
                    (trip: any) =>
                    <tr key={trip.id}>
                        <td>{trip.name}</td>
                    </tr>

                )
            }
        </tbody>
    </table>);
}

export default ListTrips;