import { Doctor } from './doctor';
import { Patient } from './patient';

export interface MedicalAppointmentNote {

    id : number;
    description : string;
    date : Date;
    patient : Patient;
    doctor : Doctor;
}