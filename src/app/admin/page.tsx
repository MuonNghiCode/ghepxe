"use client";
import { useAuth } from "@/context/AuthContext";
import { usePayments } from "@/hooks/usePayments";
import { Users, Package, TrendingUp, DollarSign } from "lucide-react";
import { useMemo } from "react";
import {
  StatsCard,
  RevenueChart,
  PaymentStatusChart,
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
        ordersGrowthRate: 0,
        totalUsers: 0,
      };
    }

    // Filter only completed transactions (case-insensitive)
    const completedPayments = payments.filter(
      (p) => p.status.toLowerCase() === "completed"
    );

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

    // Revenue growth rate
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

    let growthRate = 0;
    if (previousRevenue > 0) {
      growthRate = ((recentRevenue - previousRevenue) / previousRevenue) * 100;
    } else if (recentRevenue > 0) {
      growthRate = 100;
    } else if (previousRevenue < 0 && recentRevenue > previousRevenue) {
      growthRate = 100;
    } else if (previousRevenue < 0 && recentRevenue < previousRevenue) {
      growthRate = -100;
    }

    // Orders growth rate (số đơn hàng)
    const recentOrders = completedPositivePayments.filter((p) => {
      const date = new Date(p.createdAt);
      return date >= last7Days;
    }).length;

    const previousOrders = completedPositivePayments.filter((p) => {
      const date = new Date(p.createdAt);
      return date >= last14Days && date < last7Days;
    }).length;

    const ordersGrowthRate =
      previousOrders > 0
        ? ((recentOrders - previousOrders) / previousOrders) * 100
        : recentOrders > 0
        ? 100
        : 0;

    // Get unique users
    const uniqueUsers = new Set(payments.map((p) => p.userId)).size;

    return {
      totalRevenue,
      totalOrders: completedPositivePayments.length, // CHỈ ĐẾM ĐƠN COMPLETED VÀ DƯƠNG
      growthRate,
      ordersGrowthRate,
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
      <div className="relative bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-2xl p-8 mt-10 text-white shadow-xl overflow-hidden">
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
          change={`${
            stats.ordersGrowthRate >= 0 ? "+" : ""
          }${stats.ordersGrowthRate.toFixed(1)}%`}
          changeType={stats.ordersGrowthRate >= 0 ? "increase" : "decrease"}
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

      {/* Charts Section with Modern Layout */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Phân tích & Thống kê
            </h2>
            <p className="text-sm text-[var(--gray-text)] mt-1">
              Tổng quan về doanh thu và trạng thái giao dịch
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-[var(--gray-text)] bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
            <div className="w-2 h-2 bg-[var(--primary-green)] rounded-full animate-pulse"></div>
            Cập nhật: {new Date().toLocaleTimeString("vi-VN")}
          </div>
        </div>

        {/* Charts Grid - Modern 2 column layout */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Revenue Chart - Larger emphasis */}
          <div className="xl:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur"></div>
              <div className="relative transform hover:scale-[1.01] transition-all duration-300">
                <RevenueChart payments={payments} />
              </div>
            </div>
          </div>

          {/* Payment Status Chart */}
          <div className="xl:col-span-1">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-2xl opacity-0 group-hover:opacity-10 transition duration-300 blur"></div>
              <div className="relative transform hover:scale-[1.01] transition-all duration-300">
                <PaymentStatusChart payments={payments} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Transaction History Table */}
      <div className="relative">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] rounded-2xl opacity-5"></div>
        <div className="relative">
          <TransactionTable payments={payments} error={error} />
        </div>
      </div>
    </div>
  );
}
