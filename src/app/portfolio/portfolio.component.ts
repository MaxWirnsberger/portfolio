import { Component } from '@angular/core';
import { HeroBannerComponent } from './hero-banner/hero-banner.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ElpollolocoComponent } from './projects/elpolloloco/elpolloloco.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [
    HeroBannerComponent,
    AboutMeComponent,
    MySkillsComponent,
    ProjectsComponent,
    ElpollolocoComponent,
    FooterComponent
  ],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {}
