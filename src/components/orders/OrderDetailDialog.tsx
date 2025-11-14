"use client";

import Image from "next/image";
import { ShipRequestData, ProfileResponseData } from "@/types";
import {
  Package,
  MapPin,
  Clock,
  Truck,
  User,
  Phone,
  Star,
  UserCircle,
  Hash,
  Box,
  Weight,
  Ruler,
  FileText,
  CheckCircle2,
  XCircle,
  Map,
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

interface OrderDetailDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  order: ShipRequestData;
  userProfile: ProfileResponseData | null;
  loadingUser: boolean;
}

export default function OrderDetailDialog({
  open,
  onOpenChange,
  order,
  userProfile,
  loadingUser,
}: OrderDetailDialogProps) {
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
      case "paid":
        return "bg-green-100 text-green-700 border-green-200";
      case "pending":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "completed":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "cancelled":
        return "bg-red-100 text-red-700 border-red-200";
      case "in_progress":
        return "bg-purple-100 text-purple-700 border-purple-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  const getStatusText = (status: string) => {
    const statusLower = status.toLowerCase();
    switch (statusLower) {
      case "paid":
        return "Đã thanh toán";
      case "pending":
        return "Chờ xử lý";
      case "completed":
        return "Hoàn thành";
      case "cancelled":
        return "Đã hủy";
      case "in_progress":
        return "Đang giao";
      default:
        return status;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent onClose={() => onOpenChange(false)}>
        <DialogHeader>
          <div className="flex items-center gap-3 pr-8">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] rounded-xl flex items-center justify-center shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <DialogTitle>Chi tiết đơn hàng</DialogTitle>
              <DialogDescription>
                #{order.shipRequestId.slice(-5)}
              </DialogDescription>
            </div>
            <span
              className={`ml-auto px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
                order.status
              )}`}
            >
              {getStatusText(order.status)}
            </span>
          </div>
        </DialogHeader>

        <DialogBody>
          <div className="space-y-6">
            {/* Order Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Hash className="w-5 h-5 text-[var(--primary-green)]" />
                Thông tin đơn hàng
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Mã đơn hàng</p>
                  <p className="font-semibold text-gray-900">
                    {order.shipRequestId}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Loại hàng</p>
                  <p className="font-semibold text-gray-900">
                    {order.itemType}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Loại vận chuyển</p>
                  <p className="font-semibold text-gray-900">
                    {order.shipType}
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-xs text-gray-500 mb-1">Danh mục</p>
                  <p className="font-semibold text-gray-900">
                    {order.itemCategory}
                  </p>
                </div>
              </div>
            </div>

            {/* User Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <UserCircle className="w-5 h-5 text-[var(--primary-green)]" />
                Người đặt hàng
              </h3>
              <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                {loadingUser ? (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-green-200 rounded-full animate-pulse"></div>
                    <div className="flex-1 space-y-2">
                      <div className="h-4 w-32 bg-green-200 rounded animate-pulse"></div>
                      <div className="h-3 w-40 bg-green-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                ) : userProfile ? (
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
                      {userProfile.avatarUrl ? (
                        <Image
                          src={userProfile.avatarUrl}
                          alt={userProfile.username}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <UserCircle className="w-6 h-6 text-green-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {userProfile.username}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {userProfile.phone}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {userProfile.address || "Chưa cập nhật"}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-gray-500">
                    Không tải được thông tin người dùng
                  </p>
                )}
              </div>
            </div>

            {/* Driver Info */}
            {order.driverId && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Truck className="w-5 h-5 text-[var(--primary-green)]" />
                  Tài xế
                </h3>
                <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
                      {order.driverAvatarUrl ? (
                        <Image
                          src={order.driverAvatarUrl}
                          alt={order.driverName || "Driver"}
                          width={48}
                          height={48}
                          className="rounded-full object-cover"
                        />
                      ) : (
                        <User className="w-6 h-6 text-blue-600" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900">
                        {order.driverName}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3" />
                          {order.driverPhone}
                        </div>
                        {order.driverRating && (
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {order.driverRating.toFixed(1)}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Addresses */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Map className="w-5 h-5 text-[var(--primary-green)]" />
                Địa chỉ
              </h3>
              <div className="space-y-3">
                <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-green-700 mb-1">
                        ĐIỂM LẤY HÀNG
                      </p>
                      <p className="text-gray-900 font-medium">
                        {order.pickupAddress}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Tọa độ: {order.pickupLatitude.toFixed(6)},{" "}
                        {order.pickupLongitude.toFixed(6)}
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
                        ĐIỂM GIAO HÀNG
                      </p>
                      <p className="text-gray-900 font-medium">
                        {order.dropoffAddress}
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        Tọa độ: {order.dropoffLatitude.toFixed(6)},{" "}
                        {order.dropoffLongitude.toFixed(6)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Window */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Clock className="w-5 h-5 text-[var(--primary-green)]" />
                Thời gian
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Bắt đầu</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(order.pickupWindowStart)}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">Kết thúc</p>
                    <p className="font-semibold text-gray-900">
                      {formatDate(order.pickupWindowEnd)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Items */}
            {order.items && order.items.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Box className="w-5 h-5 text-[var(--primary-green)]" />
                  Danh sách hàng hóa ({order.items.length})
                </h3>
                <div className="space-y-3">
                  {order.items.map((item) => (
                    <div
                      key={item.itemId}
                      className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
                    >
                      <div className="flex gap-4">
                        {item.imageUrl && (
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                            <Image
                              src={item.imageUrl}
                              alt={item.name}
                              width={80}
                              height={80}
                              className="object-cover"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {item.name}
                          </h4>
                          <div className="grid grid-cols-3 gap-3 text-sm">
                            <div className="flex items-center gap-1 text-gray-600">
                              <Hash className="w-3 h-3" />
                              <span>SL: {item.amount}</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Weight className="w-3 h-3" />
                              <span>{item.weight} kg</span>
                            </div>
                            <div className="flex items-center gap-1 text-gray-600">
                              <Ruler className="w-3 h-3" />
                              <span>{item.size}</span>
                            </div>
                          </div>
                          {item.description && (
                            <div className="mt-2 flex items-start gap-1 text-xs text-gray-500">
                              <FileText className="w-3 h-3 mt-0.5 flex-shrink-0" />
                              <span>{item.description}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Special Requests */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[var(--primary-green)]" />
                Yêu cầu đặc biệt
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    key: "returnDelivery",
                    label: "Giao trả hàng",
                    value: order.specialRequest.returnDelivery,
                  },
                  {
                    key: "loading",
                    label: "Bốc xếp",
                    value: order.specialRequest.loading,
                  },
                  {
                    key: "driverAssistance",
                    label: "Hỗ trợ tài xế",
                    value: order.specialRequest.driverAssistance,
                  },
                  {
                    key: "smsNotification",
                    label: "Thông báo SMS",
                    value: order.specialRequest.smsNotification,
                  },
                  {
                    key: "electronicInvoice",
                    label: "Hóa đơn điện tử",
                    value: order.specialRequest.electronicInvoice,
                  },
                ].map((item) => (
                  <div
                    key={item.key}
                    className={`flex items-center gap-2 p-3 rounded-lg border ${
                      item.value
                        ? "bg-green-50 border-green-200"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    {item.value ? (
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    ) : (
                      <XCircle className="w-4 h-4 text-gray-400" />
                    )}
                    <span
                      className={`text-sm font-medium ${
                        item.value ? "text-green-700" : "text-gray-500"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogBody>

        <DialogFooter>
          <button
            onClick={() => onOpenChange(false)}
            className="px-6 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium"
          >
            Đóng
          </button>
          <button className="px-6 py-2 bg-[var(--primary-green)] text-white rounded-lg hover:bg-[var(--secondary-green)] transition-colors font-medium">
            Chỉnh sửa
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
