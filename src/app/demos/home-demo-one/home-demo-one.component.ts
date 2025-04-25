import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { BannerComponent } from '../home-demo-two/banner/banner.component';
import { ServicesComponent } from '../../common/services/services.component';
import { CompanyComponent } from '../../common/company/company.component';
/*import { WhyChooseUsComponent } from '../../common/why-choose-us/why-choose-us.component';*/
import { WorkingProcessComponent } from '../../common/working-process/working-process.component';
import { CaseStudiesComponent } from '../../common/case-studies/case-studies.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { TeamComponent } from '../../common/team/team.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';
import { BlogComponent } from '../../common/blog/blog.component';
import { ContactComponent } from '../../common/contact/contact.component';
import { InfoComponent } from '../../common/info/info.component';
import { WhyChooseUsComponent } from '../home-demo-two/why-choose-us/why-choose-us.component';

@Component({
    selector: 'app-home-demo-one',
    imports: [TopHeaderComponent, NavbarComponent, BannerComponent, ServicesComponent, CompanyComponent, WhyChooseUsComponent, WorkingProcessComponent, CaseStudiesComponent, FeaturesComponent, TeamComponent, TestimonialsComponent, BlogComponent, ContactComponent, InfoComponent],
    templateUrl: './home-demo-one.component.html',
    styleUrl: './home-demo-one.component.scss'
})
export class HomeDemoOneComponent {}
