import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { EAuthActions,
        GetAuthUID,
        GetAuthUIDFailed,
        SignIn,
        SignInFailed,
        SignOut,
        SignUp,
        SignUpFailed,
        GetUserFromDB,
        GetUserFromDBFailed,
        GetUserFromDBSuccess} from '../actions/auth.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { FirebaseAuthService } from 'src/app/core/services/firebase-auth.services';
import { of } from 'rxjs';
import { FirebaseFirestoreService } from 'src/app/core/services/firebase-firestore.service';

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private firebaseAuthService: FirebaseAuthService,
        private firestoreService: FirebaseFirestoreService
    ) {}

    @Effect()
    GetAuthUID$ = this.actions$.pipe(
        ofType(EAuthActions.GetAuthUID),
        switchMap(() => {
            return this.firebaseAuthService.getCurrentUser();
        }),
        map(authData => {
            if (!authData) {
                this.router.navigate(['/auth']);
                return new GetAuthUIDFailed();
            }

            return new GetUserFromDB(authData.uid);
        })
    );

    @Effect()
    getUserFromDB$ = this.actions$.pipe(
        ofType(EAuthActions.GetUserFromDB),
        switchMap((action: GetUserFromDB) => {
            return this.firestoreService.getUserData(action.payload);
        }),
        map(userData => {
            if (!userData) {
                this.router.navigate(['/auth']);
                return new GetUserFromDBFailed();
            }

            // this.router.navigate(['/home']);
            return new GetUserFromDBSuccess(userData);
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
            return new GetUserFromDB(credentials.user.uid);
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
        switchMap(userData => {
            const { uid, email } = userData.user;
            this.firestoreService.registerUserInFirestore(uid, email);
            return uid;
        }),
        map(uid => {
            this.router.navigate(['/home']);
            return new GetUserFromDB(uid);
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
            return new GetAuthUIDFailed();
        })
    );
}
