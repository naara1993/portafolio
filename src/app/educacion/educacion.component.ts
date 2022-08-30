import { Component, OnInit } from '@angular/core';
import { educacion } from './educacionModels/educacion';
import { educacionService } from './educacionService/eduacionService';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
edu:educacion[]=[];

  constructor(private eduService:educacionService) { }

  cargarEducacion():void{
    this.eduService.lista().subscribe(
      data => {
        this.edu = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.cargarEducacion();    
  }
  }



