import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { datosPersonales } from './models-datos-personales/datosPersonales';
import { datosPersonalesServicios } from './service-datos-personales/datosPersonalesService';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent  {
  datosPersona:datosPersonales[]=[];
  showImage:boolean=false;
  constructor( private servicioDatosPersonales:datosPersonalesServicios,  private router: Router) { 
    this.showImage = false;
  }  
  cargarPersona():void {
    this.servicioDatosPersonales.lista().subscribe(
      data => {
        this.datosPersona = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.cargarPersona()
  }
}