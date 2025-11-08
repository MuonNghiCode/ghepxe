import { useState } from "react";
import Image from "next/image";
import { ShipRequestData } from "@/types";
import {
  Package,
  MapPin,
  Clock,
  Truck,
  User,
  Phone,
  Star,
  UserCircle,
} from "lucide-react";
import { useUserProfile } from "@/hooks/useUserProfile";
import OrderDetailDialog from "./OrderDetailDialog";

interface OrderCardProps {
  request: ShipRequestData;
}

export default function OrderCard({ request }: OrderCardProps) {
  const { userProfile, isLoading: loadingUser } = useUserProfile(
    request.userId
  );
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
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      {/* Gradient hover effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-green)]/5 to-[var(--secondary-green)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] rounded-xl flex items-center justify-center shadow-lg">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-sm">
                #{request.shipRequestId.slice(-5)}
              </h3>
              <p className="text-xs text-[var(--gray-text)]">
                {request.itemType}
              </p>
            </div>
          </div>
          <span
            className={`px-3 py-1.5 rounded-full text-xs font-semibold border ${getStatusColor(
              request.status
            )}`}
          >
            {getStatusText(request.status)}
          </span>
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
                Điểm lấy hàng
              </p>
              <p className="text-sm text-gray-900 line-clamp-2">
                {request.pickupAddress}
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
                Điểm giao hàng
              </p>
              <p className="text-sm text-gray-900 line-clamp-2">
                {request.dropoffAddress}
              </p>
            </div>
          </div>
        </div>

        {/* Time window */}
        <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <Clock className="w-4 h-4 text-[var(--gray-text)]" />
          <span className="text-sm text-gray-700">
            {formatDate(request.pickupWindowStart)} -{" "}
            {new Date(request.pickupWindowEnd).toLocaleTimeString("vi-VN", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
        </div>

        {/* User info (order creator) */}
        <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center overflow-hidden">
            {userProfile?.avatarUrl ? (
              <Image
                src={userProfile.avatarUrl}
                alt={userProfile.username || "User"}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
            ) : (
              <UserCircle className="w-5 h-5 text-green-600" />
            )}
          </div>
          <div className="flex-1">
            {loadingUser ? (
              <div className="space-y-1">
                <div className="h-4 w-24 bg-green-200 rounded animate-pulse"></div>
                <div className="h-3 w-32 bg-green-200 rounded animate-pulse"></div>
              </div>
            ) : userProfile ? (
              <>
                <p className="text-sm font-semibold text-gray-900">
                  {userProfile.username}
                </p>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Phone className="w-3 h-3" />
                  {userProfile.phone}
                </div>
              </>
            ) : (
              <p className="text-sm text-gray-500">Đang tải thông tin...</p>
            )}
          </div>
          <div className="text-xs text-green-600 font-medium">Người đặt</div>
        </div>

        {/* Driver info (if assigned) */}
        {request.driverId && (
          <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center overflow-hidden">
              {request.driverAvatarUrl ? (
                <Image
                  src={request.driverAvatarUrl}
                  alt={request.driverName || "Driver"}
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              ) : (
                <User className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-gray-900">
                {request.driverName}
              </p>
              <div className="flex items-center gap-2 text-xs text-gray-600">
                <Phone className="w-3 h-3" />
                {request.driverPhone}
                {request.driverRating && (
                  <>
                    <span>•</span>
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    {request.driverRating.toFixed(1)}
                  </>
                )}
              </div>
            </div>
            <div className="text-xs text-blue-600 font-medium">Tài xế</div>
          </div>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2 text-xs text-[var(--gray-text)]">
            <Truck className="w-4 h-4" />
            <span>{request.shipType}</span>
            <span>•</span>
            <span>{request.itemCategory}</span>
          </div>
          <button
            onClick={() => setShowDetail(true)}
            className="text-[var(--primary-green)] hover:text-[var(--primary-green)]/80 font-semibold text-sm transition-colors"
          >
            Chi tiết →
          </button>
        </div>
      </div>

      {/* Detail Dialog */}
      <OrderDetailDialog
        open={showDetail}
        onOpenChange={setShowDetail}
        order={request}
        userProfile={userProfile}
        loadingUser={loadingUser}
      />
    </div>
  );
}
