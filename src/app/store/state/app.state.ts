import { RouterReducerState } from '@ngrx/router-store';
import { ICurrentUserState, initialCurrentUserState } from './currentUser.state';

export interface IAppState {
    router?: RouterReducerState;
    currentUser: ICurrentUserState;
}

export const initialAppState: IAppState = {
    currentUser: initialCurrentUserState
};

export function getInitialState(): IAppState {
    return initialAppState;
}
