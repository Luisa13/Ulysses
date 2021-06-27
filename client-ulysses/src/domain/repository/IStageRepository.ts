import Stage from '../entity/Stage'

export default interface IStageRepository{
    getStages():Promise<Stage[]>
}