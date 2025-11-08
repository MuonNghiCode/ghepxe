import BaseApiService from "@/api/base";
import { API_ENDPOINTS } from "@/constants";
import { LoginRequest, LoginResponse, LoginResponseData, LogoutRequest, LogoutResponse, LogoutResponseData, ProfileResponse, ProfileResponseData } from "@/types";


class AuthService extends BaseApiService {
    async signin(credentials: LoginRequest): Promise<LoginResponse> {
        return this.post<LoginResponseData>(API_ENDPOINTS.USER.LOGIN, credentials);
    }

    async logout(logoutData: LogoutRequest): Promise<LogoutResponse> {
        return this.post<LogoutResponseData>(API_ENDPOINTS.USER.LOGOUT, logoutData);
    }

    async getProfile(): Promise<ProfileResponse> {
        return this.get<ProfileResponseData>(API_ENDPOINTS.USER.PROFILE);
    }

    async getUserProfile(userId: string): Promise<ProfileResponse> {
        const endpoint = API_ENDPOINTS.USER.GET_PROFILE.replace("{userId}", userId);
        return this.get<ProfileResponseData>(endpoint);
    }
}

export const authService = new AuthService();