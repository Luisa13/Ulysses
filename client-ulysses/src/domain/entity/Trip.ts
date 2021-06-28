import User from  "../entity/User";
import Stage from "../entity/Stage";

export default class Trip{
    id: number;
    place: string;
    users: Set<User>;
    stages: Stage[];

    constructor(id: number, place: string, users: Set<User>, stages: Stage[]){
        this.id = id;
        this.place = place;
        this.users = users;
        this.stages = stages;
    }
}