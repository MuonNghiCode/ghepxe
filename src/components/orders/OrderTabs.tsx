import { Users, UserCheck } from "lucide-react";

interface OrderTabsProps {
  activeTab: "user" | "driver";
  onTabChange: (tab: "user" | "driver") => void;
  userCount: number;
  driverCount: number;
}

export default function OrderTabs({
  activeTab,
  onTabChange,
  userCount,
  driverCount,
}: OrderTabsProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      <div className="flex border-b border-gray-200">
        {/* User Orders Tab */}
        <button
          onClick={() => onTabChange("user")}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 font-semibold transition-all relative ${
            activeTab === "user"
              ? "text-[var(--primary-green)] bg-[var(--primary-green)]/5"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <Users className="w-5 h-5" />
          <span>Đơn hàng người dùng</span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              activeTab === "user"
                ? "bg-[var(--primary-green)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {userCount}
          </span>
          {activeTab === "user" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-green)]"></div>
          )}
        </button>

        {/* Driver Orders Tab */}
        <button
          onClick={() => onTabChange("driver")}
          className={`flex-1 flex items-center justify-center gap-3 px-6 py-4 font-semibold transition-all relative ${
            activeTab === "driver"
              ? "text-[var(--primary-green)] bg-[var(--primary-green)]/5"
              : "text-gray-600 hover:bg-gray-50"
          }`}
        >
          <UserCheck className="w-5 h-5" />
          <span>Đơn hàng tài xế</span>
          <span
            className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
              activeTab === "driver"
                ? "bg-[var(--primary-green)] text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {driverCount}
          </span>
          {activeTab === "driver" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--primary-green)]"></div>
          )}
        </button>
      </div>
    </div>
  );
}
