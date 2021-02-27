import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/constants/app-constants';
import { Patient } from 'src/app/models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient : HttpClient) {}

  public getPatients(): Observable<Array<Patient>> {
    return this.httpClient.get<Array<Patient>>(`${BASE_API_URL}/patients/`);
  }

  public getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${BASE_API_URL}/patients/${id}`);
  }

  public createPatient(Patient : Patient): Observable<Patient> {  
    return this.httpClient.post<Patient>(`${BASE_API_URL}/patients/`, Patient);
  }

  public updatePatient(Patient : Patient, id : number): Observable<Patient> {   
    return this.httpClient.put<Patient>(`${BASE_API_URL}/patients/${id}`, Patient);
  }

  public deletePatient(id: number): Observable<Patient> {
    return this.httpClient.delete<Patient>(`${BASE_API_URL}/patients/${id}`);
  }

}
