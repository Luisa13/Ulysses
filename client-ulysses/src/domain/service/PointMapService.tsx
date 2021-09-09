import PointMap from '../entity/PointMap';
import Stage from '../entity/Stage'
import IPointMapRepository from '../repository/IPointMapRepository';

export interface IPointMapService{
    getPointMaps(stages: Stage[]): Promise<PointMap[]>;
}

export default class PointMapService implements IPointMapService{
    pointMapRepo: IPointMapRepository;

    constructor(pmRepo: IPointMapRepository){
        this.pointMapRepo = pmRepo;
    }

    getPointMaps(stages: Stage[]): Promise<PointMap[]>{
        return this.pointMapRepo.getPointMaps(stages);
    }

}