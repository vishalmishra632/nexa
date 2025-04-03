import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

@Component({
    selector: 'app-case-study-details',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './case-study-details.component.html',
    styleUrl: './case-study-details.component.scss'
})
export class CaseStudyDetailsComponent {}