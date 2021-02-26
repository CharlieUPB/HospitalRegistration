import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from 'src/app/models/doctor';
import { BASE_API_URL } from 'src/app/constants/app-constants';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

	constructor(private httpClient : HttpClient) {}

  public getDoctors(): Observable<Array<Doctor>> {
    return this.httpClient.get<Array<Doctor>>(`${BASE_API_URL}/api/doctors/`);
  }

  public getDoctorById(id: number): Observable<Doctor> {
    return this.httpClient.get<Doctor>(`${BASE_API_URL}/api/doctors/${id}`);
  }

  public createDoctor(doctor : Doctor): Observable<Doctor> {  
    return this.httpClient.post<Doctor>(`${BASE_API_URL}/api/doctors/`, doctor);
  }

  public updateDoctor(doctor : Doctor, id : number): Observable<Doctor> {   
    return this.httpClient.put<Doctor>(`${BASE_API_URL}/api/doctors/${id}`, doctor);
  }

  public deleteDoctor(id: number): Observable<Doctor> {
    return this.httpClient.delete<Doctor>(`${BASE_API_URL}/api/doctors/${id}`);
  }

}
