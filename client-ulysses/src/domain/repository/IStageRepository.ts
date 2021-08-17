import Stage from '../entity/Stage'

export default interface IStageRepository{
    getStages():Promise<Stage[]>
    createNewStage(stage: object): Promise<Stage>
    delete(id_stage: number): Promise<Response>
    
}