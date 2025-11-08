import BaseApiService from "@/api/base";
import { API_ENDPOINTS } from "@/constants";
import { ShipRequestData, ShipRequestResponse } from "@/types";

class ShipRequestService extends BaseApiService {
    async getAll(): Promise<ShipRequestResponse> {
        return this.get<ShipRequestData[]>(API_ENDPOINTS.SHIP_REQUEST.GET_ALL);
    }
}

export const shipRequestService = new ShipRequestService();