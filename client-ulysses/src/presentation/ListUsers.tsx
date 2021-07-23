import React, {useState} from "react";
import * as Provider from '../util/Provider';
import User from "../domain/entity/User";



const ListUser: React.FC = ()  => {

    const bloc = Provider.ProviderUsers();
    const[users, setUsers] = useState(Array<User>());
    bloc.getUsers()
    .then(res =>{
        console.log(res);
        setUsers(res);
    });
    /*React.useEffect(() => {
        setListUsers(bloc.getUsers());
    }, [bloc]);*/

    return(
        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>SURNAME</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(
                        (user: any) =>
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                        </tr>

                    )
                }
            </tbody>
        </table>

    );
}

export default ListUser;