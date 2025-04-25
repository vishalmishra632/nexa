import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterModule, ActivatedRoute } from '@angular/router';
import { TopHeaderComponent } from '../../common/top-header/top-header.component';
import { NavbarComponent } from '../../common/navbar/navbar.component';
import { PageBannerComponent } from '../../common/page-banner/page-banner.component';
import { NgFor, NgIf } from '@angular/common';
import { BLOG_CONTENT, BlogContent } from '../../data/blog-content.data';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-blog-details',
    standalone: true,
    imports: [
        CommonModule,
        RouterModule,  // This is critical for ActivatedRoute to work
        RouterLink,
        TopHeaderComponent,
        NavbarComponent,
        PageBannerComponent,
        NgFor,
        NgIf
    ],
    templateUrl: './blog-details.component.html',
    styleUrl: './blog-details.component.scss'
})
export class BlogDetailsComponent implements OnInit {
    blogData: BlogContent | undefined;
    pageTitle: string = 'Blog Details';

    constructor(private route: ActivatedRoute) { }

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const blogSlug = params['slug'];
            this.blogData = BLOG_CONTENT[blogSlug];
            if (this.blogData) {
                this.pageTitle = this.blogData.title;
            }
        });
    }
}
