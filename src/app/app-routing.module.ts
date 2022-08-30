import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { EducacionComponent } from './educacion/educacion.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { SkillComponent } from './skill/skill.component';


const routes: Routes = [
  {path: '', component: DatosPersonalesComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'skill',component:SkillComponent},
  {path:'educacion',component:EducacionComponent}
 // {path:'', component :AppComponent}

];


@NgModule({
  imports : [RouterModule.forRoot(
    routes
  )
  ],
  exports: [RouterModule]
  })
  export class AppRoutingModule { }
