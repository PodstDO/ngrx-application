// import { Injectable } from '@angular/core';
// import { CanLoad, Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
// import { FirebaseAuthService } from '../services/firebase-auth.services';
// import { Observable } from 'rxjs';
// import { map } from 'rxjs/operators';

// @Injectable()
// export class CanLoadApplicationPage implements CanLoad {
//     constructor(private router: Router, private fireAuthService: FirebaseAuthService) { }

//     canLoad(route: Route): Observable<boolean> {
//         return this.fireAuthService.isSignedIn()
//             .pipe(
//                 map(isUser => {
//                     console.warn('CanLoadApplicationPage', isUser);
//                     if (isUser) {
//                         return true;
//                     }

//                     this.router.navigate(['/auth']);
//                     return false;
//                 })
//             );
//     }
// }

// @Injectable()
// export class CanLoadAuthPage implements CanLoad {
//     constructor(private router: Router, private fireAuthService: FirebaseAuthService) { }

//     canLoad(route: Route): Observable<boolean> {
//         return this.fireAuthService.isSignedIn()
//             .pipe(
//                 map(isUser => {
//                     if (!isUser) {
//                         return true;
//                     }

//                     this.router.navigate(['/home']);
//                     return false;
//                 })
//             );
//     }
// }

// @Injectable()
// export class CanActivateApplicationPage implements CanActivate {
//     constructor(private router: Router, private fireAuthService: FirebaseAuthService) { }
//     canActivate(
//         route: ActivatedRouteSnapshot,
//         state: RouterStateSnapshot): Observable<boolean> {
//         return this.fireAuthService.isSignedIn()
//         .pipe(
//             map(isUser => {
//                 console.warn('CanActivateApplicationPage', isUser);
//                 if (isUser) {
//                     return true;
//                 }

//                 this.router.navigate(['/auth']);
//                 return false;
//             })
//         );
//     }
// }
