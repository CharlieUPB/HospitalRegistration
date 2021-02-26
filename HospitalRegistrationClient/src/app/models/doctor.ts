import { Interface } from "readline";
import { MedicalAppointmentNote } from './medicalAppointmentNote';
import { Speciality } from './speciality';

export interface Doctor {
    id : number;
    name : string;
    lastName : string;
    birthdate : Date;
    address : string;
    profilePicture : string;
    specialities : Array<Speciality>;
    medicalAppointmentNotes : Array<MedicalAppointmentNote>;
}