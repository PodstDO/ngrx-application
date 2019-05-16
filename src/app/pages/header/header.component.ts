import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(public router: Router) {}

    @Output() sidebarToggle = new EventEmitter();

    toggleSidebar(): void {
        this.sidebarToggle.emit();
    }
}
