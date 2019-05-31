import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { passwordMatchValidator, passwordValidators } from 'src/app/core/validators/password.validators';
import { emailValidators } from 'src/app/core/validators/email.validators';
import { MatProgressButtonOptions } from 'mat-progress-buttons';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { SignUp } from 'src/app/store/actions/auth.actions';
import { selectAuthLoader } from 'src/app/store/selectors/auth.selectors';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<IAppState>
  ) { }

  public signUpForm: FormGroup;
  public signUpButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Sign Up',
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
    this.signUpForm = this.initSignUpForm();
    this.signUpForm.statusChanges.subscribe(validStatus => {
      this.signUpButtonOptions.disabled = validStatus === 'INVALID' ? true : false;
    });
    this.store.pipe(select(selectAuthLoader)).subscribe(loader => {
      this.signUpButtonOptions.active = loader;
  });
  }

  initSignUpForm(): FormGroup {
    return this.fb.group(
      {
        email: ['', emailValidators],
        password: ['', passwordValidators],
        confirmPassword: ['', passwordValidators]
      },
      {
        validator: [passwordMatchValidator]
      }
    );
  }

  signUp(e): void {
    e.preventDefault();
    this.store.dispatch(new SignUp(this.signUpForm.value));
  }
}
