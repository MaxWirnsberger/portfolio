import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [NgFor],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {
  skillimgs: string[] = [
    "assets/imgs/skills/Angular.png",
    "assets/imgs/skills/Typescript.png",
    "assets/imgs/skills/JavScript.png",
    "assets/imgs/skills/html.png",
    "assets/imgs/skills/css.png",
    "assets/imgs/skills/Firebase.png",
    "assets/imgs/skills/Git.png",
    "assets/imgs/skills/Scrum.png",
    "assets/imgs/skills/Api.png",
    "assets/imgs/skills/Wordpress.png",
  ]

  skilltext: string[] = [
    "Angular",
    "Typescript",
    "JavScript",
    "HTML",
    "CSS",
    "Firebase",
    "GIT",
    "Scrum",
    "API",
    "Wordpress",
  ]
}
