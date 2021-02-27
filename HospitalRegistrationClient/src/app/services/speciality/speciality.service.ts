import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASE_API_URL } from 'src/app/constants/app-constants';
import { Speciality } from 'src/app/models/speciality';

@Injectable({
  providedIn: 'root'
})
export class SpecialityService {

  constructor(private httpClient : HttpClient) {}

  public getSpecialities(): Observable<Array<Speciality>> {
    return this.httpClient.get<Array<Speciality>>(`${BASE_API_URL}/specialities/`);
  }

  public getSpecialityById(id: number): Observable<Speciality> {
    return this.httpClient.get<Speciality>(`${BASE_API_URL}/specialities/${id}`);
  }

  public createSpeciality(Speciality : Speciality): Observable<Speciality> {  
    return this.httpClient.post<Speciality>(`${BASE_API_URL}/specialities/`, Speciality);
  }

  public updateSpeciality(Speciality : Speciality, id : number): Observable<Speciality> {   
    return this.httpClient.put<Speciality>(`${BASE_API_URL}/specialities/${id}`, Speciality);
  }

  public deleteSpeciality(id: number): Observable<Speciality> {
    return this.httpClient.delete<Speciality>(`${BASE_API_URL}/specialities/${id}`);
  }

}
