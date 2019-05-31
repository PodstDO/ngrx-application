import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidators } from 'src/app/core/validators/email.validators';
import { passwordValidators } from 'src/app/core/validators/password.validators';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SignIn } from 'src/app/store/actions/auth.actions';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { selectAuthLoader } from 'src/app/store/selectors/auth.selectors';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    constructor(
        private store: Store<IAppState>
    ) { }

    public signInForm: FormGroup;
    public signInButtonOptions: MatProgressButtonOptions = {
        active: false,
        text: 'Sign In',
        spinnerSize: 20,
        raised: true,
        stroked: false,
        flat: false,
        fab: false,
        buttonColor: 'primary',
        spinnerColor: 'primary',
        fullWidth: false,
        disabled: true,
        mode: 'indeterminate',
    };

    ngOnInit() {
        this.initSignInForm();
        this.signInForm.statusChanges.subscribe(validStatus => {
            this.signInButtonOptions.disabled = validStatus === 'INVALID' ? true : false;
        });
        this.store.pipe(select(selectAuthLoader)).subscribe(loader => {
            this.signInButtonOptions.active = loader;
        });
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
