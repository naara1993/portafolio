import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { DatosPersonalesComponent } from './datos-personales/datos-personales.component';
import { datosPersonalesServicios } from './datos-personales/service-datos-personales/datosPersonalesService';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SkillComponent } from './skill/skill.component';
import { FormsModule } from '@angular/forms';
import { skillsServicios } from './skill/skills-service/SkillsService';
import { EducacionComponent } from './educacion/educacion.component';
import { educacionService } from './educacion/educacionService/eduacionService';

@NgModule({
  declarations: [
    AppComponent,
    DatosPersonalesComponent,
    ProyectosComponent,
    ContactoComponent,
    SkillComponent,
    EducacionComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [datosPersonalesServicios,skillsServicios,educacionService],
  bootstrap: [AppComponent]
})
export class AppModule { 


}
