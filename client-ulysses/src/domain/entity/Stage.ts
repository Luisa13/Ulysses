export default class Stage{
    id: number;
    place: string;
    startDate: Date;
    endDate: Date;
    //image: File;
    description: string;

    constructor(id: number, place: string, startDate: Date, endDate: Date){
        this.id = id;
        this.place = place;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = "";
        //this.image ;
    }

   /* setImage(image: File){
        this.image = image;
    }*/

    setDescription(description: string){
        this.description = description;
    }

}