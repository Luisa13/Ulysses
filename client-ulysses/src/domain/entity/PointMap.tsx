
export default class PointMap{
    id: number;
    name: string;
    markerOffset: number;
    lat: number;
    lon: number;

    constructor(id: number, name: string, markerOffset: number, lat: number, lon: number){
        this.id = id;
        this.name = name;
        this.markerOffset = markerOffset;
        this.lat = lat;
        this.lon = lon;
    }

    

}