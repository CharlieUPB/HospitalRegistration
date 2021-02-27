import { Doctor } from './doctor';

export interface Speciality {
    id : number;
    name : string;
    description : string;
    iconIdentifier : string;
    doctors : Array<Doctor>;
}