import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class FirebaseService {
    constructor(private fireAuth: AngularFireAuth) { }

    signIn({ email, password }) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp({ email, password }) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signOut() {
        this.fireAuth.auth.signOut();
    }

    getCurrentUser() {
        return this.fireAuth.auth.currentUser;
    }

    isUserSignedIn() {
        return !!this.fireAuth.auth.currentUser;
    }
}
