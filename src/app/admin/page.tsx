"use client";
import { useAuth } from "@/context/AuthContext";
import { usePayments } from "@/hooks/usePayments";
import { Users, Package, TrendingUp, DollarSign } from "lucide-react";
import { useMemo } from "react";
import {
  StatsCard,
  RevenueChart,
  PaymentStatusChart,
  PaymentGatewayChart,
  TransactionTable,
  DashboardSkeleton,
} from "@/components";

export default function AdminDashboard() {
  const { user } = useAuth();
  const { payments, isLoading, error } = usePayments();

  // Calculate revenue and stats - CHỈ TÍNH GIAO DỊCH COMPLETED (TỔNG DƯƠNG TRỪ ÂM)
  const stats = useMemo(() => {
    if (!payments.length) {
      return {
        totalRevenue: 0,
        totalOrders: 0,
        growthRate: 0,
        totalUsers: 0,
      };
    }

    // Filter only completed transactions
    const completedPayments = payments.filter((p) => p.status === "Completed");

    // Filter only completed transactions with positive amounts (for counting orders)
    const completedPositivePayments = completedPayments.filter(
      (p) => p.amount > 0
    );

    // Calculate total revenue - TỔNG TẤT CẢ ĐơN DƯƠNG TRỪ TẤT CẢ ĐƠN ÂM
    const totalRevenue = completedPayments.reduce((sum, p) => {
      return sum + p.amount; // Cộng dương, trừ âm tự động
    }, 0);

    // Calculate growth rate (compare last 7 days vs previous 7 days)
    const now = new Date();
    const last7Days = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const last14Days = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    const recentRevenue = completedPayments
      .filter((p) => {
        const date = new Date(p.createdAt);
        return date >= last7Days;
      })
      .reduce((sum, p) => sum + p.amount, 0);

    const previousRevenue = completedPayments
      .filter((p) => {
        const date = new Date(p.createdAt);
        return date >= last14Days && date < last7Days;
      })
      .reduce((sum, p) => sum + p.amount, 0);

    const growthRate =
      previousRevenue > 0
        ? ((recentRevenue - previousRevenue) / previousRevenue) * 100
        : recentRevenue > 0
        ? 100
        : 0;

    // Get unique users
    const uniqueUsers = new Set(payments.map((p) => p.userId)).size;

    return {
      totalRevenue,
      totalOrders: completedPositivePayments.length, // CHỈ ĐẾM ĐƠN COMPLETED VÀ DƯƠNG
      growthRate,
      totalUsers: uniqueUsers,
    };
  }, [payments]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  // Show skeleton while loading
  if (isLoading) {
    return <DashboardSkeleton />;
  }

  return (
    <div className="space-y-8">
      {/* Welcome Section with Gradient */}
      <div className="relative bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-2xl p-8 text-white shadow-xl overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10">
          <h1 className="text-4xl font-extrabold mb-3">
            Chào mừng trở lại, {user?.username}!
          </h1>
          <p className="text-white/90 text-lg">
            Đây là tổng quan về hệ thống của bạn -{" "}
            {new Date().toLocaleDateString("vi-VN")}
          </p>
        </div>
      </div>

      {/* Stats Grid - Sử dụng StatsCard Component */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Tổng người dùng"
          value={stats.totalUsers}
          icon={Users}
          change="+12%"
          changeType="increase"
        />
        <StatsCard
          title="Đơn hàng"
          value={stats.totalOrders}
          icon={Package}
          change="+8%"
          changeType="increase"
        />
        <StatsCard
          title="Doanh thu"
          value={formatCurrency(stats.totalRevenue)}
          icon={DollarSign}
          change={`${
            stats.growthRate >= 0 ? "+" : ""
          }${stats.growthRate.toFixed(1)}%`}
          changeType={stats.growthRate >= 0 ? "increase" : "decrease"}
        />
        <StatsCard
          title="Tăng trưởng"
          value={`${stats.growthRate.toFixed(1)}%`}
          icon={TrendingUp}
          change={`${
            stats.growthRate >= 0 ? "+" : ""
          }${stats.growthRate.toFixed(1)}%`}
          changeType={stats.growthRate >= 0 ? "increase" : "decrease"}
        />
      </div>

      {/* Charts Section with Title */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Biểu đồ phân tích
          </h2>
          <div className="text-sm text-[var(--gray-text)]">
            Cập nhật: {new Date().toLocaleTimeString("vi-VN")}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <RevenueChart payments={payments} />
          </div>
          <div className="transform hover:scale-[1.02] transition-transform duration-300">
            <PaymentStatusChart payments={payments} />
          </div>
        </div>

        {/* Payment Gateway Chart - Full width */}
        <div className="transform hover:scale-[1.01] transition-transform duration-300">
          <PaymentGatewayChart payments={payments} />
        </div>
      </div>

      {/* Transaction History Table */}
      <TransactionTable payments={payments} error={error} />
    </div>
  );
}
