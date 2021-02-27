import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/constants/app-constants';
import { Hospital } from 'src/app/models/hospital';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  constructor(private httpClient : HttpClient) {}

  public getHospitals(): Observable<Array<Hospital>> {
    return this.httpClient.get<Array<Hospital>>(`${BASE_API_URL}/hospitals/`);
  }

  public getHospitalById(id: number): Observable<Hospital> {
    return this.httpClient.get<Hospital>(`${BASE_API_URL}/hospitals/${id}`);
  }

  public createHospital(Hospital : Hospital): Observable<Hospital> {  
    return this.httpClient.post<Hospital>(`${BASE_API_URL}/hospitals/`, Hospital);
  }

  public updateHospital(Hospital : Hospital, id : number): Observable<Hospital> {   
    return this.httpClient.put<Hospital>(`${BASE_API_URL}/hospitals/${id}`, Hospital);
  }

  public deleteHospital(id: number): Observable<Hospital> {
    return this.httpClient.delete<Hospital>(`${BASE_API_URL}/hospitals/${id}`);
  }

}
