
export default class PointMap{
    name: string;
    markerOffset: number;
    coordinates: number[];

    constructor(name: string, markerOffset: number, coordinates: number[]){
        this.name = name;
        this.markerOffset = markerOffset;
        this.coordinates = coordinates;
    }

    setCoordinates(coordinates: number[]){
        this.coordinates = coordinates;
    }

}