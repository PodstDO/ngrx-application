import { Component, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { IAppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/store/selectors/currentUser.selectors';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
    constructor(
        public router: Router,
        private store: Store<IAppState>
    ) {}

    public currentUser$ = this.store.pipe(select(selectCurrentUser));

    @Output() sidebarToggle = new EventEmitter();
    @Output() sidebarClose = new EventEmitter();

    onSidebarClose(): void {
        this.sidebarClose.emit();
    }

    toggleSidebar(): void {
        this.sidebarToggle.emit();
    }
}
