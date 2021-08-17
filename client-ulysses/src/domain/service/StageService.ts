import Stage from '../entity/Stage'
import StageRepository from '../repository/StageRepository'
import IStageRepository from '../repository/IStageRepository'

export interface IStageService{
    getStages():Promise<Stage[]>;
    createNewStage(stage: object): Promise<Stage>
    deleteStage(id_stage: number): Promise<Response>
}

export default class StageService implements IStageService{
    stageRepo: IStageRepository;
    
    constructor(stageRepo: IStageRepository){
        this.stageRepo = stageRepo;
    }
    async getStages():Promise<Stage[]>{
        return this.stageRepo.getStages();
    }

    async createNewStage(stage: object): Promise<Stage>{
        return this.createNewStage(stage);
    }

    async deleteStage(id_stage: number): Promise<Response>{
        return this.deleteStage(id_stage);
    }
}