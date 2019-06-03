import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { User } from 'firebase';
import { IAuthResponse } from 'src/app/shared/models/auth-response.interface';

@Injectable()
export class FirebaseAuthService {
    constructor(private fireAuth: AngularFireAuth) {}

    signIn({ email, password }): Promise<IAuthResponse> {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp({ email, password }): Observable<IAuthResponse> {
        return from(this.fireAuth.auth.createUserWithEmailAndPassword(email, password));
    }

    signOut(): Promise<void> {
        return this.fireAuth.auth.signOut();
    }

    isCurrentUser(): boolean {
        return !!this.fireAuth.authState;
    }

    getCurrentUser(): Observable<User> {
        return this.fireAuth.authState;
    }
}
