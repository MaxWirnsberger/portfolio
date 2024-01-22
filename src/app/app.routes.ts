import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';


export const routes: Routes = [
    {path: '', component: PortfolioComponent},
    {path: 'legalNotice', component: LegalNoticeComponent},
    {path: 'privacyPolicy', component: PrivacyPolicyComponent},
];
