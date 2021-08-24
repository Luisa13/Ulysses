export default class Stage{
    id: number;
    place: string;
    startDate: Date;
    endDate: Date;
    imageBase64: string;
    description: string;

    constructor(id: number, place: string, startDate: Date, endDate: Date, imageBase64: string){
        this.id = id;
        this.place = place;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = "";
        this.imageBase64 = imageBase64;
    }

}