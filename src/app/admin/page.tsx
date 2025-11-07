"use client";
import { useAuth } from "@/context/AuthContext";
import { Users, Package, TrendingUp, DollarSign } from "lucide-react";

const stats = [
  {
    title: "Tổng người dùng",
    value: "1,234",
    icon: Users,
    change: "+12%",
    changeType: "increase",
  },
  {
    title: "Đơn hàng",
    value: "856",
    icon: Package,
    change: "+8%",
    changeType: "increase",
  },
  {
    title: "Doanh thu",
    value: "125M",
    icon: DollarSign,
    change: "+23%",
    changeType: "increase",
  },
  {
    title: "Tăng trưởng",
    value: "15.2%",
    icon: TrendingUp,
    change: "+3%",
    changeType: "increase",
  },
];

export default function AdminDashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Chào mừng trở lại, {user?.username}! 👋
        </h1>
        <p className="text-[var(--gray-text)]">
          Đây là tổng quan về hệ thống của bạn
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.title}
              className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-[var(--primary-green)]/10 rounded-lg flex items-center justify-center">
                  <Icon className="w-6 h-6 text-[var(--primary-green)]" />
                </div>
                <span
                  className={`text-sm font-medium ${
                    stat.changeType === "increase"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {stat.change}
                </span>
              </div>
              <h3 className="text-[var(--gray-text)] text-sm mb-1">
                {stat.title}
              </h3>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Hoạt động gần đây
        </h2>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-[var(--gray-text)]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Người dùng mới đăng ký
                  </p>
                  <p className="text-xs text-[var(--gray-text)]">
                    {item} phút trước
                  </p>
                </div>
              </div>
              <span className="text-xs text-[var(--primary-green)] font-medium">
                Xem chi tiết
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
