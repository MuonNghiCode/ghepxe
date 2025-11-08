import { useState, useEffect } from "react";
import { authService } from "@/services/authService";
import type { ProfileResponseData } from "@/types";

export function useUserProfile(userId: string | null) {
  const [userProfile, setUserProfile] = useState<ProfileResponseData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      setUserProfile(null);
      setIsLoading(false);
      setError(null);
      return;
    }

    const fetchUserProfile = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await authService.getUserProfile(userId);
        if (response.isSuccess) {
          setUserProfile(response.value);
        } else {
          setError(response.error.description || "Failed to load user profile");
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserProfile();
  }, [userId]);

  return { userProfile, isLoading, error };
}
