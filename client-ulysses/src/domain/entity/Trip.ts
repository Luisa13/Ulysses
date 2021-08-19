import User from  "../entity/User";
import Stage from "../entity/Stage";

export default class Trip{
    id: number;
    name: string;
    date: string;
    //users: Set<number|undefined>;
    usersId: (number|undefined)[];
    //stages: Stage[];

    
    constructor(id: number, name: string, date: string, usersId: (number|undefined)[]){
        this.id = id;
        this.name = name;
        this.date = date;
        this.usersId = usersId;
        //this.stages = stages;
    }
}