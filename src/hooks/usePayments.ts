"use client";
import { useState, useEffect } from "react";
import { paymentService } from "@/services/paymentService";
import { PaymentData } from "@/types";

interface UsePaymentResult {
  payments: PaymentData[];
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function usePayments(): UsePaymentResult {
  const [payments, setPayments] = useState<PaymentData[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchPayments = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await paymentService.getAllPayments();
      
      if (response.isSuccess && response.value) {
        setPayments(response.value);
      } else {
        throw new Error(response.error?.description || "Failed to fetch payments");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred while fetching payments");
      console.error("Error fetching payments:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  return {
    payments,
    isLoading,
    error,
    refetch: fetchPayments,
  };
}
