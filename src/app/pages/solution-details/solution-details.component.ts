import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { NgFor, NgIf } from '@angular/common';
import { SERVICE_CONTENT, ServiceContent } from '../../data/service-content.data';

@Component({
    selector: 'app-solution-details',
    imports: [
        TopHeaderComponent,
        NavbarComponent,
        PageBannerComponent,
        NgFor,
        NgIf
    ],
    templateUrl: './solution-details.component.html',
    styleUrl: './solution-details.component.scss'
})
export class SolutionDetailsComponent implements OnInit {
    serviceData: ServiceContent | undefined;
    pageTitle: string = 'Solution Details';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const serviceType = params['type'];
            this.serviceData = SERVICE_CONTENT[serviceType];
            if (this.serviceData) {
                this.pageTitle = this.serviceData.title;
            }
        });
    }
}
