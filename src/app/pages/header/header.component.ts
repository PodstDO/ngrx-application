import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/core/services/firebase.services';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(
        public router: Router,
        private firebaseService: FirebaseService
    ) { }

    @Output() sidebarToggle = new EventEmitter();
    @Output() sidebarClose = new EventEmitter();

    onSidebarClose(): void {
        this.sidebarClose.emit();
    }

    toggleSidebar(): void {
        this.sidebarToggle.emit();
    }

    isCurrentUser(): boolean {
        return this.firebaseService.isCurrentUser();
    }
}
