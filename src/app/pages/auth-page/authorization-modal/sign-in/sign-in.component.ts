import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.services';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidators } from 'src/app/core/validators/email.validators';
import { passwordValidators } from 'src/app/core/validators/password.validators';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SignIn } from 'src/app/store/actions/auth.actions';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    constructor(
        private firebaseAuthService: FirebaseAuthService,
        private router: Router,
        private store: Store<IAppState>
    ) { }
    public signInForm: FormGroup;

    ngOnInit() {
        this.initSignInForm();
    }

    private initSignInForm(): void {
        this.signInForm = new FormGroup({
            email: new FormControl('', emailValidators),
            password: new FormControl('', passwordValidators)
        });
    }

    signIn(e: Event) {
        e.preventDefault();

        this.store.dispatch(new SignIn(this.signInForm.value));
    }
}
