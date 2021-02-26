import { Doctor } from './doctor';

export interface Speciality {
    id : string;
    name : string;
    description : string;
    iconIdentifier : string;
    doctors : Array<Doctor>;
}