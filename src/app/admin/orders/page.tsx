"use client";

import { useState, useMemo } from "react";
import { RefreshCw } from "lucide-react";
import { useShipRequests } from "@/hooks/useShipRequests";
import OrderTabs from "@/components/orders/OrderTabs";
import OrderFilters from "@/components/orders/OrderFilters";
import OrderList from "@/components/orders/OrderList";
import OrderPagination from "@/components/orders/OrderPagination";
import {
  OrderLoadingSkeleton,
  OrderError,
} from "@/components/orders/OrderStates";

const ITEMS_PER_PAGE = 10;

export default function OrdersPage() {
  const { shipRequests, isLoading, error, refetch } = useShipRequests();
  const [activeTab, setActiveTab] = useState<"user" | "driver">("user");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter orders based on tab (user orders don't have driver, driver orders have driver)
  const tabFilteredOrders = useMemo(() => {
    if (!shipRequests) return [];
    if (activeTab === "user") {
      return shipRequests.filter((order) => !order.driverId);
    }
    return shipRequests.filter((order) => order.driverId);
  }, [shipRequests, activeTab]);

  // Apply search and status filters
  const filteredOrders = useMemo(() => {
    let filtered = tabFilteredOrders;

    // Search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (order) =>
          order.shipRequestId.toLowerCase().includes(search) ||
          order.pickupAddress.toLowerCase().includes(search) ||
          order.dropoffAddress.toLowerCase().includes(search) ||
          order.itemType.toLowerCase().includes(search)
      );
    }

    // Status filter
    if (statusFilter !== "All") {
      filtered = filtered.filter((order) => order.status === statusFilter);
    }

    return filtered;
  }, [tabFilteredOrders, searchTerm, statusFilter]);

  // Pagination
  const totalPages = Math.ceil(filteredOrders.length / ITEMS_PER_PAGE);
  const paginatedOrders = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredOrders.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [filteredOrders, currentPage]);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchTerm, statusFilter, activeTab]);

  // Handle tab change with reset
  const handleTabChange = (tab: "user" | "driver") => {
    setActiveTab(tab);
    setSearchTerm("");
    setStatusFilter("All");
    setCurrentPage(1);
  };

  // Handle refresh
  const handleRefresh = () => {
    refetch();
    setSearchTerm("");
    setStatusFilter("All");
    setCurrentPage(1);
  };

  if (isLoading) {
    return <OrderLoadingSkeleton />;
  }

  if (error) {
    return <OrderError error={error} onRetry={refetch} />;
  }

  const userOrdersCount = shipRequests?.filter((o) => !o.driverId).length || 0;
  const driverOrdersCount = shipRequests?.filter((o) => o.driverId).length || 0;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mt-10">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản lý đơn hàng</h1>
          <p className="text-[var(--gray-text)] mt-1">
            Quản lý và theo dõi tất cả đơn hàng vận chuyển
          </p>
        </div>
        <button
          onClick={handleRefresh}
          className="flex items-center gap-2 px-4 py-2 bg-[var(--primary-green)] text-white rounded-lg hover:bg-[var(--primary-green)]/90 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4" />
          Làm mới
        </button>
      </div>

      {/* Tabs */}
      <OrderTabs
        activeTab={activeTab}
        onTabChange={handleTabChange}
        userCount={userOrdersCount}
        driverCount={driverOrdersCount}
      />

      {/* Filters */}
      <OrderFilters
        searchTerm={searchTerm}
        onSearchChange={(value: string) => {
          setSearchTerm(value);
          setCurrentPage(1);
        }}
        statusFilter={statusFilter}
        onStatusChange={(value: string) => {
          setStatusFilter(value);
          setCurrentPage(1);
        }}
        onClearSearch={() => setSearchTerm("")}
        resultsCount={paginatedOrders.length}
        totalCount={filteredOrders.length}
      />

      {/* Order List */}
      <OrderList orders={paginatedOrders} />

      {/* Pagination */}
      {totalPages > 1 && (
        <OrderPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
