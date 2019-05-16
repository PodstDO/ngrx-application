import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.services';
import { FormGroup, FormBuilder } from '@angular/forms';
import { passwordMatchValidator, passwordValidators } from 'src/app/core/validators/password.validators';
import { emailValidators } from 'src/app/core/validators/email.validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  constructor(private firebaseService: FirebaseService, private fb: FormBuilder) { }
  public signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = this.initSignUpForm();
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

    this.firebaseService.signUp(this.signUpForm.value)
      .then(data => {
        console.log('Sign Up and Sign In Success');
      })
      .catch(error => {
        console.warn(error.message);
      });
  }
}
