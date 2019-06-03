import { Injectable } from '@angular/core';
import { AngularFirestore, DocumentData } from '@angular/fire/firestore';
import { UserID, ICurrentUser } from 'src/app/shared/models/currentUser.interface';
import { Observable } from 'rxjs';

@Injectable()
export class FirebaseFirestoreService {
    constructor(private firestore: AngularFirestore) {}

    registerUserInFirestore(uid, email) {
        return this.firestore.collection('users').doc(uid).set({uid, email});
    }

    getUserData(uid: UserID): Observable<ICurrentUser> {
        return this.firestore.collection('users').doc<ICurrentUser>(uid).valueChanges();
    }
}
