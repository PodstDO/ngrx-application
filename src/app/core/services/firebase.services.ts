import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseService {
    constructor(private fireAuth: AngularFireAuth, private firestore: AngularFirestore) {
        this.fireAuth.authState.subscribe(user => {
            this.currentUser = user;
        });
    }

    private currentUser;

    signIn({ email, password }) {
        return this.fireAuth.auth.signInWithEmailAndPassword(email, password);
    }

    signUp({ email, password }) {
        return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
    }

    signOut(): Promise<void> {
        return this.fireAuth.auth.signOut();
    }

    getCurrentUser(): User {
        return this.currentUser;
    }

    isCurrentUser(): boolean {
        return !!this.currentUser;
    }

    isSignedIn(): Observable<User> {
        return this.fireAuth.authState;
    }

    registerUserInFirestore({ uid, email }) {
        this.firestore.collection('users').doc(uid).set({uid, email});
    }
}
