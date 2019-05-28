import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/core/services/firebase.services';
import { FormControl, FormGroup } from '@angular/forms';
import { emailValidators } from 'src/app/core/validators/email.validators';
import { passwordValidators } from 'src/app/core/validators/password.validators';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
    constructor(
        private firebaseService: FirebaseService,
        private router: Router
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

        this.firebaseService.signIn(this.signInForm.value)
            .then(() => {
                this.router.navigate(['/home']);
            })
            .catch(error => {
                console.warn(error.message);
            });
    }
}
