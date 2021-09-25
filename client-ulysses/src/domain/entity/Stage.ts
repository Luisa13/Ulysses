export default class Stage{
    id: number;
    place: string;
    startDate: Date;
    endDate: Date;
    imageBase64: string;
    description: string;
    accomodation: string; 
    phone: string; 
    email: string;

    constructor(id: number, place: string, startDate: Date, endDate: Date, accomodation: string, phone: string, email: string, imageBase64: string, description: string){
        this.id = id;
        this.place = place;
        this.startDate = startDate;
        this.endDate = endDate;
        this.description = description;
        this.accomodation = accomodation; 
        this.phone = phone; 
        this.email = email;
        this.imageBase64 = imageBase64;
    }


}