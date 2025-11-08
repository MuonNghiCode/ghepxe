"use client";

import { useState } from "react";
import { RouteRequestData } from "@/types";
import {
  Truck,
  MapPin,
  Package,
  Thermometer,
  Weight,
  Box,
  Calendar,
} from "lucide-react";
import DriverOrderDetailDialog from "./DriverOrderDetailDialog";

interface DriverOrderCardProps {
  route: RouteRequestData;
}

export default function DriverOrderCard({ route }: DriverOrderCardProps) {
  const [showDetail, setShowDetail] = useState(false);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("vi-VN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getStatusColor = (status: string) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "in_progress":
        return "bg-purple-100 text-purple-700 border-purple-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "completed":
        return "Hoàn thành";
      case "pending":
        return "Chờ xử lý";
      case "in_progress":
        return "Đang giao";
      case "cancelled":
        return "Đã hủy";
      default:
        return status;
    }
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  return (
    <>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
        {/* Gradient hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="relative z-10 space-y-4">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <Truck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-sm">
                  #{route.routeRequestId.slice(-5)}
                </h3>
                <p className="text-xs text-[var(--gray-text)]">
                  {route.vehicle.brand} {route.vehicle.model}
                </p>
              </div>
            </div>
            <span
              className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                route.status
              )}`}
            >
              {getStatusText(route.status)}
            </span>
          </div>

          {/* Vehicle Info */}
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-semibold text-gray-900">
                  {route.vehicle.licensePlate}
                </span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <div className="flex items-center gap-1">
                  <Weight className="w-3 h-3" />
                  <span>{route.availableWeight.toFixed(0)} kg</span>
                </div>
                <div className="flex items-center gap-1">
                  <Box className="w-3 h-3" />
                  <span>{route.availableVolume.toFixed(1)} m³</span>
                </div>
              </div>
            </div>
          </div>

          {/* Addresses */}
          <div className="space-y-3">
            {/* Pickup */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  Điểm bắt đầu
                </p>
                <p className="text-sm text-gray-900 line-clamp-2">
                  {route.pickupAddress}
                </p>
              </div>
            </div>

            {/* Dropoff */}
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                <MapPin className="w-4 h-4 text-red-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-700 mb-1">
                  Điểm kết thúc
                </p>
                <p className="text-sm text-gray-900 line-clamp-2">
                  {route.dropoffAddress}
                </p>
              </div>
            </div>
          </div>

          {/* Departure Time */}
          <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
            <Calendar className="w-4 h-4 text-[var(--gray-text)]" />
            <span className="text-sm text-gray-700">
              {formatDate(route.departureTime)}
            </span>
          </div>

          {/* Ship Requests Count */}
          <div className="flex items-center gap-2 p-3 bg-purple-50 rounded-lg border border-purple-200">
            <Package className="w-4 h-4 text-purple-600" />
            <span className="text-sm font-semibold text-purple-700">
              {route.shipRequests.length} đơn hàng
            </span>
            {route.isFullLoad && (
              <span className="ml-auto text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                Đầy tải
              </span>
            )}
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-xs text-gray-600">
              <Box className="w-3 h-3" />
              <span>{route.supportedCommodities}</span>
            </div>
            {route.temperatureControlled && (
              <div className="flex items-center gap-2 text-xs text-blue-600">
                <Thermometer className="w-3 h-3" />
                <span>
                  {route.minTemperatureCelsius}°C -{" "}
                  {route.maxTemperatureCelsius}
                  °C
                </span>
              </div>
            )}
          </div>

          {/* Cost Info */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-200">
            <div>
              <p className="text-xs text-gray-500 mb-1">Chi phí tuyến đường</p>
              <p className="text-sm font-semibold text-gray-900">
                {formatCurrency(route.estimatedRouteCost)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-1">Chi phí nhiên liệu</p>
              <p className="text-sm font-semibold text-gray-900">
                {formatCurrency(route.estimatedFuelCost)}
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end pt-3 border-t border-gray-200">
            <button
              onClick={() => setShowDetail(true)}
              className="text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              Chi tiết →
            </button>
          </div>
        </div>
      </div>

      {/* Detail Dialog */}
      <DriverOrderDetailDialog
        open={showDetail}
        onOpenChange={setShowDetail}
        route={route}
      />
    </>
  );
}
