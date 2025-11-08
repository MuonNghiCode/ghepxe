"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  RouteRequestData,
  ShipRequestData,
  ProfileResponseData,
} from "@/types";
import {
  Truck,
  MapPin,
  Package,
  Thermometer,
  Weight,
  Box,
  Calendar,
  Phone,
  DollarSign,
  FileText,
  UserCircle,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogFooter,
} from "@/components/ui/dialog";
import { shipRequestService } from "@/services/shipRequestService";
import { authService } from "@/services/authService";

interface DriverOrderDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  route: RouteRequestData;
}

interface ShipRequestWithUser {
  shipRequest: ShipRequestData | null;
  user: ProfileResponseData | null;
  loading: boolean;
}

export default function DriverOrderDetailDialog({
  open,
  onOpenChange,
  route,
}: DriverOrderDetailDialogProps) {
  const [shipRequestsData, setShipRequestsData] = useState<
    Map<string, ShipRequestWithUser>
  >(new Map());

  useEffect(() => {
    if (open && route.shipRequests.length > 0) {
      // Initialize loading state for all ship requests
      const initialData = new Map<string, ShipRequestWithUser>();
      route.shipRequests.forEach((shipReq) => {
        initialData.set(shipReq.shipRequestId, {
          shipRequest: null,
          user: null,
          loading: true,
        });
      });
      setShipRequestsData(initialData);

      // Fetch ship requests and user data
      const fetchData = async () => {
        for (const shipReq of route.shipRequests) {
          try {
            // Fetch ship request details
            console.log("Fetching ship request:", shipReq.shipRequestId);
            const shipResponse = await shipRequestService.getById(
              shipReq.shipRequestId
            );

            console.log("Ship response:", shipResponse);

            // Check if response is successful and has value (object, not array!)
            if (shipResponse.isSuccess && shipResponse.value) {
              const shipRequest = shipResponse.value;
              console.log("Ship request data:", shipRequest);

              // Fetch user profile
              console.log("Fetching user profile:", shipRequest.userId);
              const userResponse = await authService.getUserProfile(
                shipRequest.userId
              );
              console.log("User response:", userResponse);
              const user = userResponse.isSuccess ? userResponse.value : null;

              // Update state immediately after fetching each ship request
              setShipRequestsData((prevData) => {
                const newData = new Map(prevData);
                newData.set(shipReq.shipRequestId, {
                  shipRequest,
                  user,
                  loading: false,
                });
                console.log(
                  "Updated ship request data:",
                  shipReq.shipRequestId,
                  { shipRequest, user }
                );
                return newData;
              });
            } else {
              console.error(
                "No data found for ship request:",
                shipReq.shipRequestId,
                shipResponse
              );
              // No data found
              setShipRequestsData((prevData) => {
                const newData = new Map(prevData);
                newData.set(shipReq.shipRequestId, {
                  shipRequest: null,
                  user: null,
                  loading: false,
                });
                return newData;
              });
            }
          } catch (error) {
            console.error(
              "Error fetching data for",
              shipReq.shipRequestId,
              error
            );
            // Update state with error
            setShipRequestsData((prevData) => {
              const newData = new Map(prevData);
              newData.set(shipReq.shipRequestId, {
                shipRequest: null,
                user: null,
                loading: false,
              });
              return newData;
            });
          }
        }
      };

      fetchData();
    } else if (!open) {
      // Clear data when dialog closes
      setShipRequestsData(new Map());
    }
  }, [open, route.shipRequests]);

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
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <div className="flex items-center gap-3 pr-8">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Truck className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle>Chi tiết tuyến đường</DialogTitle>
              <DialogDescription>
                #{route.routeRequestId.slice(-5)}
              </DialogDescription>
            </div>
            <span
              className={`ml-auto px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                route.status
              )}`}
            >
              {getStatusText(route.status)}
            </span>
          </div>
        </DialogHeader>

        <DialogBody>
          <div className="space-y-6">
            {/* Vehicle Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" />
                Thông tin xe
              </h3>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Biển số</p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.licensePlate}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Hãng xe</p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.brand} {route.vehicle.model}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Năm sản xuất</p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.year}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Màu sắc</p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.color}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Tải trọng tối đa
                    </p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.maxWeight} kg
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">
                      Thể tích tối đa
                    </p>
                    <p className="font-semibold text-gray-900">
                      {route.vehicle.maxVolume} m³
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Route Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-600" />
                Tuyến đường
              </h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-green-700 mb-1">
                        ĐIỂM BẮT ĐẦU
                      </p>
                      <p className="text-gray-900 font-medium">
                        {route.pickupAddress}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Tọa độ: {route.pickupLatitude.toFixed(6)},{" "}
                        {route.pickupLongitude.toFixed(6)}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-red-700 mb-1">
                        ĐIỂM KẾT THÚC
                      </p>
                      <p className="text-gray-900 font-medium">
                        {route.dropoffAddress}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Tọa độ: {route.dropoffLatitude.toFixed(6)},{" "}
                        {route.dropoffLongitude.toFixed(6)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time & Capacity */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-600" />
                  <p className="text-xs text-gray-500">Thời gian khởi hành</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {formatDate(route.departureTime)}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Weight className="w-4 h-4 text-gray-600" />
                  <p className="text-xs text-gray-500">Tải trọng còn trống</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {route.availableWeight.toFixed(1)} kg
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Box className="w-4 h-4 text-gray-600" />
                  <p className="text-xs text-gray-500">Thể tích còn trống</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {route.availableVolume.toFixed(2)} m³
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <Package className="w-4 h-4 text-gray-600" />
                  <p className="text-xs text-gray-500">Trạng thái tải</p>
                </div>
                <p className="font-semibold text-gray-900">
                  {route.isFullLoad ? "Đầy tải" : "Chưa đầy"}
                </p>
              </div>
            </div>

            {/* Commodity & Temperature */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Box className="w-5 h-5 text-blue-600" />
                Hàng hóa & Xử lý
              </h3>
              <div className="space-y-3">
                <div className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">Loại hàng hỗ trợ</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {route.supportedCommodities}
                  </p>
                </div>

                {route.cargoHandlingNotes && (
                  <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-yellow-600 mt-0.5" />
                      <div>
                        <p className="text-xs text-yellow-700 font-semibold mb-1">
                          Ghi chú xử lý hàng
                        </p>
                        <p className="text-sm text-gray-900">
                          {route.cargoHandlingNotes}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {route.temperatureControlled && (
                  <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                    <div className="flex items-center gap-2">
                      <Thermometer className="w-4 h-4 text-blue-600" />
                      <p className="text-sm font-semibold text-gray-900">
                        Kiểm soát nhiệt độ: {route.minTemperatureCelsius}°C -{" "}
                        {route.maxTemperatureCelsius}°C
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Cost Breakdown */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-blue-600" />
                Chi phí
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <p className="text-xs text-gray-500 mb-1">
                    Chi phí tuyến đường
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    {formatCurrency(route.estimatedRouteCost)}
                  </p>
                </div>
                <div className="bg-orange-50 rounded-xl p-4 border border-orange-200">
                  <p className="text-xs text-gray-500 mb-1">
                    Chi phí nhiên liệu
                  </p>
                  <p className="text-lg font-bold text-orange-700">
                    {formatCurrency(route.estimatedFuelCost)}
                  </p>
                </div>
              </div>
            </div>

            {/* Ship Requests */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Package className="w-5 h-5 text-blue-600" />
                Danh sách đơn hàng ({route.shipRequests.length})
              </h3>
              <div className="space-y-4">
                {route.shipRequests.map((shipReq) => {
                  const data = shipRequestsData.get(shipReq.shipRequestId);

                  if (!data || data.loading) {
                    return (
                      <div
                        key={shipReq.shipRequestId}
                        className="bg-gray-50 rounded-xl p-4 border border-gray-200 animate-pulse"
                      >
                        <div className="h-20 bg-gray-200 rounded"></div>
                      </div>
                    );
                  }

                  if (!data.shipRequest) {
                    return (
                      <div
                        key={shipReq.shipRequestId}
                        className="bg-red-50 rounded-xl p-4 border border-red-200"
                      >
                        <p className="text-sm text-red-600">
                          Không thể tải thông tin đơn hàng
                        </p>
                      </div>
                    );
                  }

                  const { shipRequest, user } = data;

                  return (
                    <div
                      key={shipReq.shipRequestId}
                      className="bg-white rounded-xl p-4 border border-gray-300 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Package className="w-5 h-5 text-purple-600" />
                          <h4 className="font-semibold text-gray-900">
                            #{shipRequest.shipRequestId.slice(-5)}
                          </h4>
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded-full font-medium">
                            {shipRequest.items?.length || 0} sản phẩm
                          </span>
                        </div>
                        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                          {shipRequest.itemType}
                        </span>
                      </div>

                      {/* User Info */}
                      {user && (
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200 mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                              {user.avatarUrl ? (
                                <Image
                                  src={user.avatarUrl}
                                  alt={user.username}
                                  width={32}
                                  height={32}
                                  className="rounded-full object-cover"
                                />
                              ) : (
                                <UserCircle className="w-4 h-4 text-green-600" />
                              )}
                            </div>
                            <div className="flex-1">
                              <p className="text-sm font-semibold text-gray-900">
                                {user.username}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-gray-600">
                                <Phone className="w-3 h-3" />
                                {user.phone}
                              </div>
                            </div>
                            <span className="text-xs text-green-600 font-medium">
                              Người đặt
                            </span>
                          </div>
                        </div>
                      )}

                      {/* Items List */}
                      {shipRequest.items && shipRequest.items.length > 0 && (
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mb-3">
                          <p className="text-xs font-semibold text-blue-900 mb-2">
                            Danh sách sản phẩm:
                          </p>
                          <div className="space-y-1">
                            {shipRequest.items.map((item, index) => (
                              <div
                                key={index}
                                className="flex items-center gap-2 text-xs"
                              >
                                <Box className="w-3 h-3 text-blue-600" />
                                <span className="text-gray-900 flex-1">
                                  {item.name}
                                </span>
                                <span className="text-gray-600">
                                  {item.weight}kg
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Addresses */}
                      <div className="space-y-2 text-sm">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Lấy hàng</p>
                            <p className="text-gray-900">
                              {shipRequest.pickupAddress}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-red-600 mt-0.5" />
                          <div>
                            <p className="text-xs text-gray-500">Giao hàng</p>
                            <p className="text-gray-900">
                              {shipRequest.dropoffAddress}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Additional Notes */}
            {route.additionalNotes && (
              <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
                <div className="flex items-start gap-2">
                  <FileText className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-yellow-800 mb-1">
                      Ghi chú bổ sung
                    </p>
                    <p className="text-sm text-gray-900">
                      {route.additionalNotes}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </DialogBody>

        <DialogFooter>
          <button
            onClick={() => onOpenChange(false)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Đóng
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
