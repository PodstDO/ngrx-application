import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { EAuthActions,
        GetUser,
        GetUserNotAuthenticated,
        GetUserAuthenticated,
        SignIn,
        SignInSuccess,
        SignInFailed,
        SignOut, 
        SignUp,
        SignUpSuccess,
        SignUpFailed} from '../actions/auth.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.services';
import { of } from 'rxjs';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private firebaseAuthService: FirebaseAuthService
    ) {}

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType(EAuthActions.GetUser),
        switchMap((action: GetUser) => {
            return this.firebaseAuthService.getCurrentUser();
        }),
        map(authData => {
            if (!authData) {
                this.router.navigate(['/auth']);
                return new GetUserNotAuthenticated();
            }

            this.router.navigate(['/home']);
            return new GetUserAuthenticated(authData);
        })
    );

    @Effect()
    signIn$ = this.actions$.pipe(
        ofType(EAuthActions.SignIn),
        switchMap((action: SignIn) => {
            return this.firebaseAuthService.signIn(action.payload);
        }),
        map(credentials => {
            this.router.navigate(['/home']);
            return new SignInSuccess(credentials);
        }),
        catchError(error => {
            this.router.navigate(['/auth']);
            return of(new SignInFailed(error));
        })
    );

    @Effect()
    signUp$ = this.actions$.pipe(
        ofType(EAuthActions.SignUp),
        switchMap((action: SignUp) => {
            return this.firebaseAuthService.signUp(action.payload);
        }),
        map(credentials => {
            this.router.navigate(['/home']);
            return new SignUpSuccess(credentials);
        }),
        catchError(error => {
            this.router.navigate(['/auth']);
            return of(new SignUpFailed(error));
        })
    );

    @Effect()
    signOut$ = this.actions$.pipe(
        ofType(EAuthActions.SignOut),
        switchMap((action: SignOut) => {
            return this.firebaseAuthService.signOut();
        }),
        map(() => {
            this.router.navigate(['/auth']);
            return new GetUserNotAuthenticated();
        })
    );
}
