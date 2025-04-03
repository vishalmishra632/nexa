import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from '../../common/info/info.component';
import { ServicesComponent } from '../../common/services/services.component';
import { WorkingProcessComponent } from '../../common/working-process/working-process.component';
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { TechnologyComponent } from '../../common/technology/technology.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { TeamComponent } from '../../common/team/team.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { ContactComponent } from './contact/contact.component';

@Component({
    selector: 'app-home-demo-two',
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, InfoComponent, ServicesComponent, WorkingProcessComponent, WhyChooseUsComponent, TechnologyComponent, CaseStudiesComponent, TestimonialsComponent, TeamComponent, BlogComponent, ContactComponent],
    templateUrl: './home-demo-two.component.html',
    styleUrl: './home-demo-two.component.scss'
})
export class HomeDemoTwoComponent {}