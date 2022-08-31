import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Skills } from '../skills-models/skills';


@Injectable({
    providedIn: 'root'
  })
  export class skillsServicios{ 


    DatosPersonaURL = ' https://nany-1234.herokuapp.com/skills/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<Skills[]> {
        return this.httpClient.get<Skills[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<Skills> {
        return this.httpClient.get<Skills>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(datosPersonales:Skills): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', datosPersonales);
      }
    
    
      public update(id: number, datosPersonales: Skills): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`,datosPersonales);
      }

    }




