import Trip from "./Trip";

export default class User{
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    role: string;
    trips: Trip[];

    constructor(id: number, name: string, surname: string, email: string, password: string, role: string, trips: Trip[]){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
        this.role = role;
        this.trips = trips;
    }
}