import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

@Component({
    selector: 'app-team',
    imports: [TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './team.component.html',
    styleUrl: './team.component.scss'
})
export class TeamComponent {}