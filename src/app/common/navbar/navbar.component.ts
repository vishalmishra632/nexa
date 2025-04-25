//import { Component, HostListener } from '@angular/core';
//import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
//import { Location, LocationStrategy, NgClass, PathLocationStrategy } from '@angular/common';

//@Component({
//    selector: 'app-navbar',
//    imports: [RouterLink, RouterLinkActive, NgClass],
//    templateUrl: './navbar.component.html',
//    styleUrl: './navbar.component.scss',
//    providers: [
//        Location, {
//            provide: LocationStrategy,
//            useClass: PathLocationStrategy
//        }
//    ]
//})
//export class NavbarComponent {

//    location: any;
//    navbarClass: any;

//    classApplied = false;
//    toggleClass() {
//        this.classApplied = !this.classApplied;
//    }

//    constructor(
//        private router: Router,
//        location: Location
//    ) {
//        this.router.events
//        .subscribe((event) => {
//            if ( event instanceof NavigationEnd ) {
//                this.location = this.router.url;
//                if (this.location == '/index-3'){
//                    this.navbarClass = 'navbar-area three';
//                } else {
//                    this.navbarClass = 'navbar-area';
//                }
//            }
//        });
//    }

//    ngOnInit(): void {}

//    // Navbar Sticky
//    isSticky: boolean = false;
//    @HostListener('window:scroll', ['$event'])
//    checkScroll() {
//        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
//        if (scrollPosition >= 50) {
//            this.isSticky = true;
//        } else {
//            this.isSticky = false;
//        }
//    }

//}


import { Component, HostListener } from '@angular/core';
import { Router, NavigationEnd, RouterLink, RouterLinkActive } from '@angular/router';
import { Location, LocationStrategy, NgClass, PathLocationStrategy } from '@angular/common';

@Component({
    selector: 'app-navbar',
    imports: [RouterLink, RouterLinkActive, NgClass],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    providers: [
        Location, {
            provide: LocationStrategy,
            useClass: PathLocationStrategy
        }
    ]
})
export class NavbarComponent {

    location: any;
    navbarClass: any;

    classApplied = false;
    toggleClass() {
        this.classApplied = !this.classApplied;
    }

    constructor(
        private router: Router,
        location: Location
    ) {
        this.router.events
            .subscribe((event) => {
                if (event instanceof NavigationEnd) {
                    this.location = this.router.url;
                    if (this.location == '/index-3') {
                        this.navbarClass = 'navbar-area three';
                    } else {
                        this.navbarClass = 'navbar-area';
                    }
                }
            });
    }

    ngOnInit(): void { }

    // Navbar Sticky - Now starts at 0 instead of 50 to make it sticky immediately
    isSticky: boolean = false;
    @HostListener('window:scroll', ['$event'])
    checkScroll() {
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition >= 0) {
            this.isSticky = true;
        } else {
            this.isSticky = false;
        }
    }

}
