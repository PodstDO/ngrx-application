import { Action } from '@ngrx/store';
import { IAuthCredentials } from 'src/app/shared/models/auth-credentials.interface';
import { IAuthResponse } from 'src/app/shared/models/auth-response.interface';
import { IAuthResponseFailed } from 'src/app/shared/models/auth-response-failed.interface';
import { ICurrentUser } from 'src/app/shared/models/currentUser.interface';

export enum EAuthActions {
    GetUser = 'GetUser',
    GetUserAuthenticated = 'GetUserAuthenticated',
    GetUserNotAuthenticated = 'GetUserNotAuthenticated',
    SignIn = 'SignIn',
    SignInSuccess = 'SignInSuccess',
    SignInFailed = 'SignInFailed',
    SignUp = 'SignUp',
    SignUpSuccess = 'SignUpSuccess',
    SignUpFailed = 'SignUpFailed',
    SignOut = 'SignOut'
}

export class GetUser implements Action {
    public readonly type = EAuthActions.GetUser;
}

export class GetUserAuthenticated implements Action {
    public readonly type = EAuthActions.GetUserAuthenticated;
    constructor(public payload: ICurrentUser) {}
}

export class GetUserNotAuthenticated implements Action {
    public readonly type = EAuthActions.GetUserNotAuthenticated;
}

export class SignIn implements Action {
    public readonly type = EAuthActions.SignIn;
    constructor(public payload: IAuthCredentials) {}
}

export class SignInSuccess implements Action {
    public readonly type = EAuthActions.SignInSuccess;
    constructor(public payload: IAuthResponse) {}
}

export class SignInFailed implements Action {
    public readonly type = EAuthActions.SignInFailed;
    constructor(public payload: IAuthResponseFailed) {}
}

export class SignUp implements Action {
    public readonly type = EAuthActions.SignUp;
    constructor(public payload: IAuthCredentials) {}
}

export class SignUpSuccess implements Action {
    public readonly type = EAuthActions.SignUpSuccess;
    constructor(public payload: IAuthResponse) {}
}

export class SignUpFailed implements Action {
    public readonly type = EAuthActions.SignUpFailed;
    constructor(public payload: IAuthResponseFailed) {}
}

export class SignOut implements Action {
    public readonly type = EAuthActions.SignOut;
}

export type AuthActions =
    GetUser |
    GetUserAuthenticated |
    GetUserNotAuthenticated |
    SignIn |
    SignInSuccess |
    SignInFailed |
    SignUp |
    SignUpSuccess |
    SignUpFailed |
    SignOut;
