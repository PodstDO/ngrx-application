import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { IAppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { SignOut } from 'src/app/store/actions/auth.actions';

@Component({
    selector: 'app-header-user-component',
    templateUrl: './header-user.component.html',
    styleUrls: ['./header-user.component.scss']
})
export class HeaderUserComponent implements OnInit {
    constructor(private store: Store<IAppState>) { }

    @Output() sidebarClose = new EventEmitter();

    public notificationsQuantity: number;

    ngOnInit() {
        this.notificationsQuantity = 3;
    }

    openNotificationsBar() {
        this.notificationsQuantity = null;
    }

    logOut() {
        this.store.dispatch(new SignOut());
        this.sidebarClose.emit();
    }
}
