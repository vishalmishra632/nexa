import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-banner',
    imports: [RouterLink],
    templateUrl: './page-banner.component.html',
    styleUrl: './page-banner.component.scss'
})
export class PageBannerComponent {

    @Input() pageTitle: string = '';
    @Input() backgroundImage: string = '';

}