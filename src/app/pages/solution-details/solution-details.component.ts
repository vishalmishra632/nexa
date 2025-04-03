import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

@Component({
    selector: 'app-solution-details',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './solution-details.component.html',
    styleUrl: './solution-details.component.scss'
})
export class SolutionDetailsComponent {}