import { Component, OnInit } from '@angular/core';
import { Skills } from './skills-models/skills';
import { skillsServicios } from './skills-service/SkillsService';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  skill:Skills[]=[];
  constructor(private skills:skillsServicios ) { }
  cargarSkills():void {
    this.skills.lista().subscribe(
      data => {
        this.skill = data;
      },
      err => {
        console.log(err);
      }
    );
  }
  ngOnInit(): void {
    this.cargarSkills()
  }


}
