import BaseApiService from "@/api/base";
import { API_ENDPOINTS } from "@/constants";
import { RouteRequestData, RouteRequestResponse } from "@/types";

class RouteRequestService extends BaseApiService {
    async getAll(): Promise<RouteRequestResponse> {
        return this.get<RouteRequestData[]>(API_ENDPOINTS.ROUTE_REQUEST.GET_ALL);
    }

    async getById(routeRequestId: string): Promise<RouteRequestResponse> {
        const endpoint = API_ENDPOINTS.ROUTE_REQUEST.GET_DETAIL.replace("{routeRequestId}", routeRequestId);
        return this.get<RouteRequestData[]>(endpoint);
    }

    async create(data: unknown): Promise<RouteRequestResponse> {
        return this.post<RouteRequestData[]>(API_ENDPOINTS.ROUTE_REQUEST.CREATE, data);
    }

    async update(routeRequestId: string, data: unknown): Promise<RouteRequestResponse> {
        const endpoint = API_ENDPOINTS.ROUTE_REQUEST.UPDATE.replace("{routeRequestId}", routeRequestId);
        return this.put<RouteRequestData[]>(endpoint, data);
    }

    async deleteRoute(routeRequestId: string): Promise<RouteRequestResponse> {
        const endpoint = API_ENDPOINTS.ROUTE_REQUEST.DELETE.replace("{routeRequestId}", routeRequestId);
        return this.delete(endpoint);
    }
}

export const routeRequestService = new RouteRequestService();
