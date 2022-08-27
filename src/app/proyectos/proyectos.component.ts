import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {



    window.addEventListener('scroll',function(){
      let header = document.getElementById('header');
      header!.classList.toggle('header-cambio',window.scrollY>10);
    })

  }



}
