"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { authService } from "@/services/authService";
import { LoginRequest, LoginResponseData, ProfileResponseData } from "@/types";

interface AuthContextType {
  user: ProfileResponseData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginRequest) => Promise<void>;
  logout: () => Promise<void>;
  getProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<ProfileResponseData | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          await getProfile();
        } catch (error) {
          console.error("Failed to load user profile:", error);
          localStorage.removeItem("token");
          localStorage.removeItem("refreshToken");
        }
      }
      setIsLoading(false);
    };

    loadUser();
  }, []);

  const login = async (credentials: LoginRequest) => {
    try {
      const response = await authService.signin(credentials);

      if (response.isSuccess && response.value) {
        const { accessToken, refreshToken, user: userData } = response.value;

        // Check if user is admin
        const isAdmin = userData.roles.some(
          (role) =>
            role.toLowerCase() === "admin" ||
            role.toLowerCase() === "administrator"
        );

        if (!isAdmin) {
          throw new Error("Chỉ admin mới được phép đăng nhập");
        }

        // Save tokens
        localStorage.setItem("token", accessToken);
        localStorage.setItem("refreshToken", refreshToken);

        // Set user data
        setUser({
          userId: userData.userId,
          username: userData.name,
          email: userData.email,
          phone: "",
          address: "",
          avatarUrl: null,
          status: "active",
          createdDate: new Date().toISOString(),
          modifiedDate: new Date().toISOString(),
          roles: userData.roles,
          shipRequestsCount: 0,
        });

        setIsAuthenticated(true);

        // Fetch full profile (optional, don't block login)
        try {
          await getProfile();
        } catch (profileError) {
          console.warn("Could not fetch full profile:", profileError);
          // Continue anyway, we have basic user data
        }
      } else {
        throw new Error(response.error?.description || "Đăng nhập thất bại");
      }
    } catch (error: any) {
      console.error("Login error:", error);
      // Clear any partial state
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setUser(null);
      setIsAuthenticated(false);
      throw error;
    }
  };
  const logout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        await authService.logout({ refreshToken });
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      // Clear local state regardless of API call result
      localStorage.removeItem("token");
      localStorage.removeItem("refreshToken");
      setUser(null);
      setIsAuthenticated(false);
    }
  };

  const getProfile = async () => {
    try {
      const response = await authService.getProfile();

      if (response.isSuccess && response.value) {
        setUser(response.value);
        setIsAuthenticated(true);
      } else {
        throw new Error(response.error?.description || "Failed to get profile");
      }
    } catch (error: any) {
      console.error("Get profile error:", error);
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated,
        isLoading,
        login,
        logout,
        getProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
