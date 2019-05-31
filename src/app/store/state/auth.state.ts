import { ICurrentUser } from 'src/app/shared/models/currentUser.interface';

export interface IAuthState {
    currentUser: ICurrentUser;
    loader: boolean;
}

export const initialAuthState: IAuthState = {
    currentUser: null,
    loader: false
};
