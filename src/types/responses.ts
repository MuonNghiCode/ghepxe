export interface ApiErrorResponse {
    type: string;
    status: number;
    detail: string;
    errors: Record<string, unknown> | null;
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

export interface PaymentData {
    id: string;
    userId: string;
    orderId: string;
    amount: number;
    paymentGateway: string;
    status: string;
    orderInfo: string;
    resultCode: number;
    message: string;
    createdAt: string;
    updatedAt: string;
    expiresAt: string | null;
}

export interface SpecialRequest {
    returnDelivery: boolean;
    loading: boolean;
    driverAssistance: boolean;
    smsNotification: boolean;
    electronicInvoice: boolean;
}

export interface ShipRequestItemData {
    itemId: string;
    name: string;
    amount: number;
    weight: number;
    description: string | null;
    imageFileId: string | null;
    imageUrl: string | null; 
    size: string;
}

export interface ShipRequestData {
    shipRequestId: string;
    userId: string;
    driverId: string | null;
    driverName: string | null;
    driverAvatarUrl: string | null;
    driverRating: number | null;
    driverPhone: string | null;
    pickupAddress: string;
    pickupLatitude: number;
    pickupLongitude: number;
    dropoffAddress: string;
    dropoffLatitude: number;
    dropoffLongitude: number;
    pickupWindowStart: string;
    pickupWindowEnd: string;
    items: ShipRequestItemData[];
    shipType: string;
    itemCategory: string;
    itemType: string;
    specialRequest: SpecialRequest;
    routePolyline: string | null;
    status: string;
}

export interface VehicleData {
    vehicleId: string;
    licensePlate: string;
    brand: string;
    model: string;
    year: number;
    color: string;
    vehicleType: string;
    maxWeight: number;
    maxVolume: number;
    maxSeats: number;
}

export interface RouteShipRequest {
    shipRequestId: string;
    createdDate: string;
}

export interface RouteRequestData {
    routeRequestId: string;
    driverId: string;
    vehicleId: string;
    pickupAddress: string;
    dropoffAddress: string;
    pickupLatitude: number;
    pickupLongitude: number;
    dropoffLatitude: number;
    dropoffLongitude: number;
    departureTime: string;
    estimatedArrivalTime: string | null;
    isFullLoad: boolean;
    availableWeight: number;
    availableVolume: number;
    supportedCommodities: string;
    cargoHandlingNotes: string | null;
    temperatureControlled: boolean;
    minTemperatureCelsius: number | null;
    maxTemperatureCelsius: number | null;
    estimatedRouteCost: number;
    estimatedFuelCost: number;
    additionalNotes: string | null;
    routePolyline: string | null;
    status: string;
    createdDate: string;
    modifiedDate: string;
    vehicle: VehicleData;
    shipRequests: RouteShipRequest[];
}

export type BaseRespose = ApiResponse<null>;
export type LoginResponse = ApiResponse<LoginResponseData>;
export type LogoutResponse = ApiResponse<LogoutResponseData>;
export type ProfileResponse = ApiResponse<ProfileResponseData>;
export type PaymentResponse = ApiResponse<PaymentData[]>;
export type ShipRequestResponse = ApiResponse<ShipRequestData[]>;
export type RouteRequestResponse = ApiResponse<RouteRequestData[]>;