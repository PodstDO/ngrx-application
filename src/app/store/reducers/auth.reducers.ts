import { ICurrentUserState, initialCurrentUserState } from '../state/currentUser.state';
import { AuthActions, EAuthActions } from '../actions/auth.actions';

export const authReducers = (
    state = initialCurrentUserState,
    action: AuthActions
): ICurrentUserState => {
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
            return state;
        }

        case EAuthActions.SignInSuccess: {
            return {
                ...state,
                currentUser: action.payload.user
            };
        }

        case EAuthActions.SignInFailed: {
            return {
                ...state,
                currentUser: null
            };
        }

        case EAuthActions.SignUp: {
            return state;
        }

        case EAuthActions.SignUpSuccess: {
            return {
                ...state,
                currentUser: action.payload.user
            };
        }

        case EAuthActions.SignUpFailed: {
            return {
                ...state,
                currentUser: null
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
