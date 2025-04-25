import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { NgFor, NgIf } from '@angular/common';
import { CASE_STUDY_CONTENT, CaseStudyContent } from '../../data/case-study-content.data';

@Component({
    selector: 'app-case-study-details',
    imports: [
        TopHeaderComponent,
        NavbarComponent,
        PageBannerComponent,
        NgFor,
        NgIf
    ],
    templateUrl: './case-study-details.component.html',
    styleUrl: './case-study-details.component.scss'
})
export class CaseStudyDetailsComponent implements OnInit {
    caseStudyData: CaseStudyContent | undefined;
    pageTitle: string = 'Case Study Details';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const caseType = params['type'];
            this.caseStudyData = CASE_STUDY_CONTENT[caseType];
            if (this.caseStudyData) {
                this.pageTitle = this.caseStudyData.title;
            }
        });
    }
}
