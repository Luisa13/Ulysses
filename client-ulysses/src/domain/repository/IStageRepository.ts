import Stage from '../entity/Stage'

export default interface IStageRepository{
    idTrip: number;
    getStages():Promise<Stage[]>
    createNewStage(stage: object): Promise<Stage>
    deleteStage(id_stage: number): Promise<Response>
    
}