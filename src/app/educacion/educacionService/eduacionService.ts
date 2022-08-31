import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { educacion } from '../educacionModels/educacion';




@Injectable({
    providedIn: 'root'
  })
  export class educacionService { 


    DatosPersonaURL = ' https://nany-1234.herokuapp.com/educacion/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<educacion[]> {
        return this.httpClient.get<educacion[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<educacion> {
        return this.httpClient.get<educacion>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(datosPersonales:educacion): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', datosPersonales);
      }
    
    
      public update(id: number, datosPersonales: educacion): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`,datosPersonales);
      }

    }
