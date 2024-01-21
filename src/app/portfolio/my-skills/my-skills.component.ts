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
    "assets/imgs/skills/materialDesign.png",
  ]

  skillimgsColor: string[] = [
    "assets/imgs/skills/Angular_color.png",
    "assets/imgs/skills/Typescript_color.png",
    "assets/imgs/skills/JavScript_color.png",
    "assets/imgs/skills/html_color.png",
    "assets/imgs/skills/css_color.png",
    "assets/imgs/skills/Firebase_color.png",
    "assets/imgs/skills/Git_color.png",
    "assets/imgs/skills/Scrum_color.png",
    "assets/imgs/skills/Api_color.png",
    "assets/imgs/skills/Wordpress_color.png",
    "assets/imgs/skills/materialDesign_color.png",
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
    "Material Design",
  ]
}
