import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { IAuthState } from '../state/auth.state';

const authState = (state: IAppState) => state.authState;

export const selectCurrentUser = createSelector(
    authState,
    (state: IAuthState) => state.currentUser
);

export const selectAuthLoader = createSelector(
    authState,
    (state: IAuthState) => state.loader
);
