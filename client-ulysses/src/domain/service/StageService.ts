import Stage from '../entity/Stage'
import StageRepository from '../repository/StageRepository'
import IStageRepository from '../repository/IStageRepository'

export interface IStageService{
    getStages():Promise<Stage[]>;
}

export default class StageService implements IStageService{
    stageRepo: IStageRepository;
    
    constructor(stageRepo: IStageRepository){
        this.stageRepo = stageRepo;
    }
    async getStages():Promise<Stage[]>{
        return this.stageRepo.getStages();
    }
}