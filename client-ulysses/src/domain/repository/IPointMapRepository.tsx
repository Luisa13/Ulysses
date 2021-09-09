import PointMap from '../entity/PointMap';
import Stage from "../entity/Stage";

export default interface IPointMapRepository{
    getPointMaps(stages: Stage[]): Promise<PointMap[]>;
}