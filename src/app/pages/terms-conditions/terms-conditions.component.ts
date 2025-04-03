import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

@Component({
    selector: 'app-terms-conditions',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './terms-conditions.component.html',
    styleUrl: './terms-conditions.component.scss'
})
export class TermsConditionsComponent {}