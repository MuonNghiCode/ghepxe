import BaseApiService from "@/api/base";
import { API_ENDPOINTS } from "@/constants";
import { PaymentResponse } from "@/types";

class PaymentService extends BaseApiService {
    async getAllPayments(): Promise<PaymentResponse> {
        return this.get(API_ENDPOINTS.PAYMENT.GET_ALL);
    }
}

export const paymentService = new PaymentService();