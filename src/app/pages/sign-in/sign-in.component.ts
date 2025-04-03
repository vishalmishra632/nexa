import { Component } from '@angular/core';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.scss'
})
export class SignInComponent {}