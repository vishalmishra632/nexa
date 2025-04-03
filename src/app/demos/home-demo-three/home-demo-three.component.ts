import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { InfoComponent } from '../../common/info/info.component';
import { ServicesComponent } from '../../common/services/services.component';
import { TechnologyComponent } from '../../common/technology/technology.component';
import { WorkingProcessComponent } from "../../common/working-process/working-process.component";
import { WhyChooseUsComponent } from './why-choose-us/why-choose-us.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { TeamComponent } from "../../common/team/team.component";
import { BlogComponent } from "../../common/blog/blog.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from '../../common/about/about.component';

@Component({
    selector: 'app-home-demo-three',
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, AboutComponent, InfoComponent, ServicesComponent, TechnologyComponent, WorkingProcessComponent, WhyChooseUsComponent, CaseStudiesComponent, TestimonialsComponent, TeamComponent, BlogComponent, ContactComponent],
    templateUrl: './home-demo-three.component.html',
    styleUrl: './home-demo-three.component.scss'
})
export class HomeDemoThreeComponent {}