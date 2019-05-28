import { Component, Output, EventEmitter } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.services';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header-user-component',
    templateUrl: './header-user.component.html',
    styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent {
    constructor(
        private firebaseService: FirebaseService,
        private router: Router) { }

    @Output() sidebarClose = new EventEmitter();

    logOut() {
        this.firebaseService.signOut().then(() => {
            this.sidebarClose.emit();
            console.log('TRY TO EMIT');
            this.router.navigate(['/auth']);
        });
    }
}
