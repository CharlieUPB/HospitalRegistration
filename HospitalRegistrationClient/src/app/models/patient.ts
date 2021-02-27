import { MedicalAppointmentNote } from './medicalAppointmentNote';

export interface Patient {
    id : number;
    name : string;
    lastName : string;
    birthdate : Date;
    address : string;
    profilePicture : string;
    medicalAppointmentNotes : Array<MedicalAppointmentNote>;
}