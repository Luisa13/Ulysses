import { isEmptyBindingElement } from 'typescript';
import PointMap from '../entity/PointMap';
import Stage from '../entity/Stage'

export default class PointMapRepository{
    baseURL = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=";

    private async getCoordenates (place: string):Promise<any> {
        console.log("Looking coordenates for place: " + place)
        const localURL = this.baseURL + place;
        const response = await fetch(localURL);
        const jsonData = await response.json();
        return jsonData; 
      }
      
      private async getCoordenatesFromAddress (stages: Stage[]):Promise<any[]>{
        const promises = stages.map((stage) => this.getCoordenates(stage.place));
        const resp = await Promise.all(promises);
        return resp
      }
      
      async getPointMaps (stages: Stage[]): Promise<PointMap[]>{
        const pointArr = [] as PointMap[];
        const coordinatesObj = await this.getCoordenatesFromAddress(stages);
        coordinatesObj.forEach(loc =>{
          const location = loc[0];
          if(location !== undefined){
            const point = new PointMap(0, location.display_name, 1, location.lat, location.lon);
            pointArr.push(point);
          }
        });
        return pointArr;
      } 
}