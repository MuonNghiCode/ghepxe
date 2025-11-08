import BaseApiService from "@/api/base";
import { API_ENDPOINTS } from "@/constants";
import { ShipRequestData, ShipRequestResponse } from "@/types";

interface ShipRequestDetailResponse {
    isSuccess: boolean;
    value: ShipRequestData;
    isFailure: boolean;
    error: {
        code: string;
        description: string;
    };
}

class ShipRequestService extends BaseApiService {
    async getAll(): Promise<ShipRequestResponse> {
        return this.get<ShipRequestData[]>(API_ENDPOINTS.SHIP_REQUEST.GET_ALL);
    }

    async getById(shipRequestId: string): Promise<ShipRequestDetailResponse> {
        const endpoint = API_ENDPOINTS.SHIP_REQUEST.GET_DETAIL.replace("{shipRequestId}", shipRequestId);
        return this.get<ShipRequestData>(endpoint);
    }
}

export const shipRequestService = new ShipRequestService();