import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { datosPersonales } from '../models-datos-personales/datosPersonales';




@Injectable({
    providedIn: 'root'
  })
  export class datosPersonalesServicios{ 


    DatosPersonaURL = 'http://localhost:8080/persona/';

    constructor(private httpClient: HttpClient) { }


    public lista(): Observable<datosPersonales[]> {
        return this.httpClient.get<datosPersonales[]>(this.DatosPersonaURL + 'lista');
      }

      public detail(id: number): Observable<datosPersonales> {
        return this.httpClient.get<datosPersonales>(this.DatosPersonaURL + `detail/${id}`);
      }

      public delete(id: number): Observable<any> {
        return this.httpClient.delete<any>(this.DatosPersonaURL + `delete/${id}`);
      }

      public save(datosPersonales:datosPersonales): Observable<any> {
        return this.httpClient.post<any>(this.DatosPersonaURL + 'crear', datosPersonales);
      }
    
    
      public update(id: number, datosPersonales: datosPersonales): Observable<any> {
        return this.httpClient.put<any>(this.DatosPersonaURL + `update/${id}`,datosPersonales);
      }

    }




