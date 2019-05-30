export interface IAuthResponse {
    additionalUserInfo?: {
        isNewUser: boolean;
    };

    user: {
        email: string;
        uid: string;
    };
}
