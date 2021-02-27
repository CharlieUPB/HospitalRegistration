import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/constants/app-constants';
import { MedicalAppointmentNote } from 'src/app/models/medicalAppointmentNote';

@Injectable({
  providedIn: 'root'
})
export class MedicalAppointmentNoteService {

  constructor(private httpClient : HttpClient) {}

  public getMedicalAppointmentNotes(): Observable<Array<MedicalAppointmentNote>> {
    return this.httpClient.get<Array<MedicalAppointmentNote>>(`${BASE_API_URL}/medicalAppointmentNotes/`);
  }

  public getMedicalAppointmentNoteById(id: number): Observable<MedicalAppointmentNote> {
    return this.httpClient.get<MedicalAppointmentNote>(`${BASE_API_URL}/medicalAppointmentNotes/${id}`);
  }

  public createMedicalAppointmentNote(MedicalAppointmentNote : MedicalAppointmentNote): Observable<MedicalAppointmentNote> {  
    return this.httpClient.post<MedicalAppointmentNote>(`${BASE_API_URL}/medicalAppointmentNotes/`, MedicalAppointmentNote);
  }

  public updateMedicalAppointmentNote(MedicalAppointmentNote : MedicalAppointmentNote, id : number): Observable<MedicalAppointmentNote> {   
    return this.httpClient.put<MedicalAppointmentNote>(`${BASE_API_URL}/medicalAppointmentNotes/${id}`, MedicalAppointmentNote);
  }

  public deleteMedicalAppointmentNote(id: number): Observable<MedicalAppointmentNote> {
    return this.httpClient.delete<MedicalAppointmentNote>(`${BASE_API_URL}/medicalAppointmentNotes/${id}`);
  }

}
