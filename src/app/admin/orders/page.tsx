"use client";

import { useState, useMemo, useEffect } from "react";
import { RefreshCw, Package } from "lucide-react";
import { useShipRequests } from "@/hooks/useShipRequests";
import { useRouteRequests } from "@/hooks/useRouteRequests";
import { ShipRequestData, RouteRequestData } from "@/types/responses";
import OrderTabs from "@/components/orders/OrderTabs";
import OrderFilters from "@/components/orders/OrderFilters";
import OrderList from "@/components/orders/OrderList";
import OrderPagination from "@/components/orders/OrderPagination";
import DriverOrderCard from "@/components/orders/DriverOrderCard";
import {
  OrderLoadingSkeleton,
  OrderError,
} from "@/components/orders/OrderStates";

const ITEMS_PER_PAGE = 10;

export default function OrdersPage() {
  const {
    shipRequests,
    isLoading: loadingShipRequests,
    error: shipError,
    refetch: refetchShipRequests,
  } = useShipRequests();
  const {
    routeRequests,
    isLoading: loadingRouteRequests,
    error: routeError,
    refetch: refetchRouteRequests,
  } = useRouteRequests();
  const [activeTab, setActiveTab] = useState<"user" | "driver">("user");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);

  // Determine which data to use based on active tab
  const isLoading =
    activeTab === "user" ? loadingShipRequests : loadingRouteRequests;
  const error = activeTab === "user" ? shipError : routeError;

  // Filter USER orders (orders without driver)
  const userOrders = useMemo(() => {
    if (!shipRequests) return [];
    return shipRequests.filter((order) => !order.driverId);
  }, [shipRequests]);

  // Filter DRIVER routes (route requests)
  const driverRoutes = useMemo(() => {
    if (!routeRequests) return [];
    return routeRequests;
  }, [routeRequests]);

  // Apply search and status filters for USER tab
  const filteredUserOrders = useMemo(() => {
    if (activeTab !== "user") return [];

    let filtered = userOrders;

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
  }, [userOrders, searchTerm, statusFilter, activeTab]);

  // Apply search and status filters for DRIVER tab
  const filteredDriverRoutes = useMemo(() => {
    if (activeTab !== "driver") return [];

    let filtered = driverRoutes;

    // Search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (route) =>
          route.routeRequestId.toLowerCase().includes(search) ||
          route.pickupAddress.toLowerCase().includes(search) ||
          route.dropoffAddress.toLowerCase().includes(search) ||
          route.vehicle.licensePlate.toLowerCase().includes(search) ||
          route.supportedCommodities.toLowerCase().includes(search)
      );
    }

    // Status filter
    if (statusFilter !== "All") {
      filtered = filtered.filter((route) => route.status === statusFilter);
    }

    return filtered;
  }, [driverRoutes, searchTerm, statusFilter, activeTab]);

  // Get current filtered data based on tab
  const currentFilteredData =
    activeTab === "user" ? filteredUserOrders : filteredDriverRoutes;

  // Pagination
  const totalPages = Math.ceil(currentFilteredData.length / ITEMS_PER_PAGE);
  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return currentFilteredData.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  }, [currentFilteredData, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
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
    if (activeTab === "user") {
      refetchShipRequests();
    } else {
      refetchRouteRequests();
    }
    setSearchTerm("");
    setStatusFilter("All");
    setCurrentPage(1);
  };

  if (isLoading) {
    return <OrderLoadingSkeleton />;
  }

  if (error) {
    return <OrderError error={error} onRetry={handleRefresh} />;
  }

  const userOrdersCount = userOrders.length;
  const driverOrdersCount = driverRoutes.length;

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
        resultsCount={paginatedData.length}
        totalCount={currentFilteredData.length}
      />

      {/* Order List - Show different component based on tab */}
      {activeTab === "user" ? (
        <OrderList orders={paginatedData as ShipRequestData[]} />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {paginatedData.length === 0 ? (
            <div className="col-span-2 bg-white rounded-xl border border-gray-200 p-12 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Không tìm thấy tuyến đường
              </h3>
              <p className="text-gray-600">
                {searchTerm || statusFilter !== "All"
                  ? "Thử thay đổi bộ lọc để xem kết quả khác"
                  : "Chưa có tuyến đường nào trong danh sách này"}
              </p>
            </div>
          ) : (
            (paginatedData as RouteRequestData[]).map((route) => (
              <DriverOrderCard key={route.routeRequestId} route={route} />
            ))
          )}
        </div>
      )}

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
