import { useState, useEffect } from "react";
import { routeRequestService } from "@/services/routeRequestService";
import type { RouteRequestData } from "@/types";

export function useRouteRequests() {
  const [routeRequests, setRouteRequests] = useState<RouteRequestData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRouteRequests = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await routeRequestService.getAll();
      if (response.isSuccess) {
        setRouteRequests(response.value);
      } else {
        setError(response.error.description || "Failed to load route requests");
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

  useEffect(() => {
    fetchRouteRequests();
  }, []);

  return { routeRequests, isLoading, error, refetch: fetchRouteRequests };
}
