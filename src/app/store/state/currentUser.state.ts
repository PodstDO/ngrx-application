import { ICurrentUser } from 'src/app/shared/models/currentUser.interface';

export interface ICurrentUserState {
    currentUser: ICurrentUser;
}

export const initialCurrentUserState: ICurrentUserState = {
    currentUser: null
}
