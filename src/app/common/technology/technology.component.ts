import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-technology',
    imports: [NgIf, RouterLink],
    templateUrl: './technology.component.html',
    styleUrl: './technology.component.scss'
})
export class TechnologyComponent {

	// Video Popup
	isOpen = false;
    openPopup(): void {
        this.isOpen = true;
    }
    closePopup(): void {
        this.isOpen = false;
    }

}