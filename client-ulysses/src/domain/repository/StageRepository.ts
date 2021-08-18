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

    async createNewStage(stage: object): Promise<Stage>{
        const localURL = this.baseURL + "/";
        const response = await fetch(localURL, {
            method: 'POST',
          headers: {
            ...this.jsonHeader
          },
          body: JSON.stringify(stage),
        });

        return response.json();
    }

    
    async deleteStage(id_stage: number): Promise<Response>{
        const response = await fetch(`${this.baseURL}/${id_stage}`, {
            method: 'DELETE',
            headers: {
              ...this.jsonHeader
            },
          });
      
          return response;
    }

    jsonHeader = {
        'Content-Type': 'application/json;'
    };

}