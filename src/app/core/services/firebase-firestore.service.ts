import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class FirebaseFirestoreService {
    constructor(private firestore: AngularFirestore) {}

    registerUserInFirestore({ uid, email }) {
        this.firestore.collection('users').doc(uid).set({uid, email});
    }
}
