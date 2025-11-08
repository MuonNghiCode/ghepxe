import { useState, useEffect } from "react";
import { shipRequestService } from "@/services/shipRequestService";
import { ShipRequestData } from "@/types";

interface UseShipRequestsReturn {
  shipRequests: ShipRequestData[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useShipRequests(): UseShipRequestsReturn {
  const [shipRequests, setShipRequests] = useState<ShipRequestData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchShipRequests = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await shipRequestService.getAll();

      if (response.isSuccess && response.value) {
        setShipRequests(response.value);
      } else {
        throw new Error(response.error?.description || "Failed to fetch ship requests");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "An error occurred while fetching ship requests";
      setError(errorMessage);
      console.error("Error fetching ship requests:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchShipRequests();
  }, []);

  return {
    shipRequests,
    isLoading,
    error,
    refetch: fetchShipRequests,
  };
}
