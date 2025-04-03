import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { TechnologyComponent } from '../../common/technology/technology.component';
import { FeaturesComponent } from '../../common/features/features.component';
import { TestimonialsComponent } from '../../common/testimonials/testimonials.component';

@Component({
    selector: 'app-about-us',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent, TechnologyComponent, FeaturesComponent, TestimonialsComponent],
    templateUrl: './about-us.component.html',
    styleUrl: './about-us.component.scss'
})
export class AboutUsComponent {}