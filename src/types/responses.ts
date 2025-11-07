export interface ApiErrorResponse {
    type: string;
    status: number;
    detail: string;
    errors: any;
}

export interface ErrorResponseModel {
    success: false;
    message: string;
    error?: string;
}


export interface ApiResponse<T> {
    value: T;
    isSuccess: boolean;
    isFailure: boolean;
    error: {
        code: string;
        description: string;
    };
}

export interface LoginResponseData {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    user: {
        userId: string;
        name: string;
        email: string;
        roles: string[];
    }
}

export interface LogoutResponseData {
    message: string;
}

export interface ProfileResponseData {
    userId: string;
    username: string;
    email: string;
    phone: string;
    address: string;
    avatarUrl: string | null;
    status: string;
    createdDate: string;
    modifiedDate: string;
    roles: string[];
    shipRequestsCount: number;
}

export type BaseRespose = ApiResponse<null>;
export type LoginResponse = ApiResponse<LoginResponseData>;
export type LogoutResponse = ApiResponse<LogoutResponseData>;
export type ProfileResponse = ApiResponse<ProfileResponseData>;