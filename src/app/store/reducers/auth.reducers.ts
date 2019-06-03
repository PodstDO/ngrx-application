import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducers = (
    state = initialAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) {

        case EAuthActions.GetAuthUID: {
            return state;
        }

        case EAuthActions.GetAuthUIDFailed: {
            return state;
        }

        case EAuthActions.GetUserFromDB: {
            return {
                ...state,
                loader: false
            };
        }

        case EAuthActions.GetUserFromDBSuccess: {
            return {
                ...state,
                currentUser: action.payload
            };
        }

        case EAuthActions.GetUserFromDBFailed: {
            return {
                ...state,
                currentUser: null
            };
        }

        case EAuthActions.SignIn: {
            return {
                ...state,
                loader: true
            };
        }

        case EAuthActions.SignInFailed: {
            return {
                ...state,
                currentUser: null,
                loader: false
            };
        }

        case EAuthActions.SignUp: {
            return {
                ...state,
                loader: true
            };
        }

        case EAuthActions.SignUpFailed: {
            return {
                ...state,
                currentUser: null,
                loader: false
            };
        }

        case EAuthActions.SignOut: {
            return {
                ...state,
                currentUser: null
            };
        }

        default:
            return state;
    }
};
