import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  private baseUrl : string;

	constructor(private httpClient : HttpClient) { 
		this.baseUrl = "localhost:4200";
	}

  public getDoctors() {
    return this.httpClient.get(`${this.baseUrl}/api/doctors`);
  }

  public getDoctorById(id: number) {
    return this.httpClient.get(`${this.baseUrl}/api/doctors/${id}`);
  }

  public createDoctor(id : number, entity : string) {  
    return this.httpClient.post(`${this.baseUrl}/api/doctors/`, entity);
  }

  public updateDoctor(entity : string, id : number) {   
    return this.httpClient.put(`${this.baseUrl}/api/doctors/${id}`, entity);
  }

  public deleteDoctor(id: number) {
    return this.httpClient.delete(`${this.baseUrl}/api/doctors/${id}`);
  }
  
}
