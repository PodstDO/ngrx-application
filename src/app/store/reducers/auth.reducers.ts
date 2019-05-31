import { IAuthState, initialAuthState } from '../state/auth.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducers = (
    state = initialAuthState,
    action: AuthActions
): IAuthState => {
    switch (action.type) {
        case EAuthActions.GetUser: {
            return state;
        }

        case EAuthActions.GetUserAuthenticated: {
            return {
                ...state,
                currentUser: action.payload
            };
        }

        case EAuthActions.GetUserNotAuthenticated: {
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

        case EAuthActions.SignInSuccess: {
            return {
                ...state,
                currentUser: action.payload.user,
                loader: false
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

        case EAuthActions.SignUpSuccess: {
            return {
                ...state,
                currentUser: action.payload.user,
                loader: false
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
