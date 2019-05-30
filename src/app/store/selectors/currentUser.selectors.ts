import { IAppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';
import { ICurrentUserState } from '../state/currentUser.state';

const currentUser = (state: IAppState) => state.currentUser;

export const selectCurrentUser = createSelector(
    currentUser,
    (state: ICurrentUserState) => state.currentUser
);
