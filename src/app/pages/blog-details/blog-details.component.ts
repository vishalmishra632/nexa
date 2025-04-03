import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';

@Component({
    selector: 'app-blog-details',
    imports: [RouterLink, TopHeaderComponent, NavbarComponent, PageBannerComponent],
    templateUrl: './blog-details.component.html',
    styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent {}