import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';
import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseAuthService } from '../core/services/firebase-auth.services';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FirebaseFirestoreService } from '../core/services/firebase-firestore.service';

@NgModule({
    declarations: [],
    imports: [
        AngularFireModule.initializeApp(environment.firebaseConfig)
    ],
    providers: [
        AngularFireAuth,
        FirebaseAuthService,
        FirebaseFirestoreService
    ],
    exports: []
})
export class FirebaseSharedModule { }
