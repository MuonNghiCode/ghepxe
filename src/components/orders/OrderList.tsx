import { ShipRequestData } from "@/types";
import OrderCard from "./OrderCard";
import { Package } from "lucide-react";

interface OrderListProps {
  orders: ShipRequestData[];
}

export default function OrderList({ orders }: OrderListProps) {
  if (orders.length === 0) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Package className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Không tìm thấy đơn hàng
          </h3>
          <p className="text-[var(--gray-text)]">
            Thử thay đổi bộ lọc hoặc tìm kiếm khác
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {orders.map((request) => (
        <OrderCard key={request.shipRequestId} request={request} />
      ))}
    </div>
  );
}
