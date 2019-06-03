import { Action } from '@ngrx/store';
import { IAuthCredentials } from 'src/app/shared/models/auth-credentials.interface';
import { IAuthResponse } from 'src/app/shared/models/auth-response.interface';
import { IAuthResponseFailed } from 'src/app/shared/models/auth-response-failed.interface';
import { ICurrentUser, UserID } from 'src/app/shared/models/currentUser.interface';

export enum EAuthActions {
    GetAuthUID = 'GetAuthUID',
    GetAuthUIDFailed = 'GetAuthUIDFailed',

    GetUserFromDB = 'GetUserFromDB',
    GetUserFromDBSuccess = 'GetUserFromDBSuccess',
    GetUserFromDBFailed = 'GetUserFromDBFailed',

    SignIn = 'SignIn',
    SignInFailed = 'SignInFailed',

    SignUp = 'SignUp',
    SignUpFailed = 'SignUpFailed',

    SignOut = 'SignOut'
}

export class GetAuthUID implements Action {
    public readonly type = EAuthActions.GetAuthUID;
}

export class GetAuthUIDFailed implements Action {
    public readonly type = EAuthActions.GetAuthUIDFailed;
}

export class GetUserFromDB implements Action {
    public readonly type = EAuthActions.GetUserFromDB;
    constructor(public payload: UserID) {}
}

export class GetUserFromDBSuccess implements Action {
    public readonly type = EAuthActions.GetUserFromDBSuccess;
    constructor(public payload: ICurrentUser) {}
}

export class GetUserFromDBFailed implements Action {
    public readonly type = EAuthActions.GetUserFromDBFailed;
}

export class SignIn implements Action {
    public readonly type = EAuthActions.SignIn;
    constructor(public payload: IAuthCredentials) {}
}

export class SignInFailed implements Action {
    public readonly type = EAuthActions.SignInFailed;
    constructor(public payload: IAuthResponseFailed) {}
}

export class SignUp implements Action {
    public readonly type = EAuthActions.SignUp;
    constructor(public payload: IAuthCredentials) {}
}

export class SignUpFailed implements Action {
    public readonly type = EAuthActions.SignUpFailed;
    constructor(public payload: IAuthResponseFailed) {}
}

export class SignOut implements Action {
    public readonly type = EAuthActions.SignOut;
}

export type AuthActions =
    GetAuthUID |
    GetAuthUIDFailed |
    GetUserFromDB |
    GetUserFromDBSuccess |
    GetUserFromDBFailed |
    SignIn |
    SignInFailed |
    SignUp |
    SignUpFailed |
    SignOut;
