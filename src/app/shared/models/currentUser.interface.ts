export interface ICurrentUser {
    avatarURL: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
    uid: UserID;
}

export type UserID = string;
