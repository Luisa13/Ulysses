import Stage from '../entity/Stage'
import IStageRepository from '../repository/IStageRepository'


class StageDTO{
    id: number = 0;
    place: string= "";
    startDate: Date = new Date();
    endDate: Date = new Date();
}

export default class StageRepository implements IStageRepository{
    baseURL = "http://localhost:8080/stage";

    async getStages():Promise<Stage[]>{
        const localURL = this.baseURL + "/allstages";
        const response = await fetch(localURL);
        const jsonData = await response.json();

        return jsonData.map((stage: StageDTO) => new Stage(stage.id, stage.place, stage.startDate, stage.endDate));

    }

}