import React, {useState} from "react";
import Stage from '../domain/entity/Stage';
import * as Provider from '../Service/Provider';

const ListStage: React.FC = () =>{
    const bloc = Provider.ProviderStages();
    const [stages, setStage] = useState(Array<Stage>());
    bloc.getStages().then(res =>{
        setStage(res)
    });

    return( <table>
            <thead>
                <tr>
                    <th>PLACE</th>
                    <th>STARTDATE</th>
                </tr>
            </thead>
            <tbody>
                {
                    stages.map(
                        (stage: any) =>
                        <tr key={stage.id}>
                            <td>{stage.place}</td>
                            <td>{stage.startDate}</td>
                        </tr>

                    )
                }
            </tbody>
        </table>);
}

export default ListStage;