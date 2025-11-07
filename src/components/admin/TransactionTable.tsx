"use client";
import { PaymentData } from "@/types/responses";
import { useState, useMemo } from "react";
import { Search, ChevronLeft, ChevronRight, Filter } from "lucide-react";

interface TransactionTableProps {
  payments: PaymentData[];
  error?: string | null;
}

export default function TransactionTable({
  payments,
  error,
}: TransactionTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const itemsPerPage = 10;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString("vi-VN");
  };

  // Filter and search logic
  const filteredPayments = useMemo(() => {
    return payments.filter((payment) => {
      const matchesSearch =
        payment.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.orderInfo.toLowerCase().includes(searchTerm.toLowerCase()) ||
        payment.paymentGateway.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || payment.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [payments, searchTerm, statusFilter]);

  // Pagination logic
  const totalPages = Math.ceil(filteredPayments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPayments = filteredPayments.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  if (error) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Lịch sử giao dịch
        </h2>
        <div className="text-red-500 text-center py-4">{error}</div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      {/* Header with Search and Filters */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Lịch sử giao dịch
          </h2>
          <span className="text-sm text-[var(--gray-text)] bg-gray-100 px-3 py-1 rounded-full">
            {filteredPayments.length} giao dịch
          </span>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
            <input
              type="text"
              placeholder="Tìm kiếm theo mã đơn, thông tin, cổng thanh toán..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
            <select
              value={statusFilter}
              onChange={(e) => {
                setStatusFilter(e.target.value);
                setCurrentPage(1);
              }}
              className="pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent appearance-none bg-white cursor-pointer"
            >
              <option value="All">Tất cả trạng thái</option>
              <option value="Completed">Hoàn thành</option>
              <option value="Pending">Đang chờ</option>
              <option value="Failed">Thất bại</option>
              <option value="Cancelled">Đã hủy</option>
              <option value="Expired">Hết hạn</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr className="border-b border-gray-200">
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Mã đơn
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Thông tin
              </th>
              <th className="text-right py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Số tiền
              </th>
              <th className="text-center py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Cổng thanh toán
              </th>
              <th className="text-left py-4 px-6 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Ngày tạo
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {currentPayments.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="text-center py-12 text-[var(--gray-text)]"
                >
                  <div className="flex flex-col items-center">
                    <Search className="w-12 h-12 text-gray-300 mb-2" />
                    <p className="font-medium">Không tìm thấy giao dịch nào</p>
                    <p className="text-sm">Thử thay đổi bộ lọc hoặc tìm kiếm</p>
                  </div>
                </td>
              </tr>
            ) : (
              currentPayments.map((payment) => (
                <tr
                  key={payment.id}
                  className="hover:bg-[var(--primary-green)]/5 transition-colors"
                >
                  <td className="py-4 px-6 text-sm">
                    <span className="font-semibold text-gray-900">
                      #{payment.orderId}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 max-w-xs">
                    <div className="truncate">{payment.orderInfo}</div>
                  </td>
                  <td className="py-4 px-6 text-sm font-bold text-right">
                    <span
                      className={
                        payment.amount > 0 ? "text-green-600" : "text-red-600"
                      }
                    >
                      {payment.amount > 0 ? "+" : ""}
                      {formatCurrency(payment.amount)}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${
                        payment.status.toLowerCase() === "completed"
                          ? "bg-green-100 text-green-700 shadow-sm"
                          : payment.status.toLowerCase() === "pending"
                          ? "bg-yellow-100 text-yellow-700 shadow-sm"
                          : payment.status.toLowerCase() === "failed"
                          ? "bg-red-100 text-red-700 shadow-sm"
                          : payment.status.toLowerCase() === "cancelled"
                          ? "bg-gray-100 text-gray-700 shadow-sm"
                          : payment.status.toLowerCase() === "expired"
                          ? "bg-blue-100 text-blue-700 shadow-sm"
                          : "bg-purple-100 text-purple-700 shadow-sm"
                      }`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                      {payment.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--primary-green)]/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-[var(--primary-green)]">
                          {payment.paymentGateway.charAt(0)}
                        </span>
                      </div>
                      <span className="text-gray-700 font-medium">
                        {payment.paymentGateway}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-sm text-gray-600 whitespace-nowrap">
                    {formatDate(payment.createdAt)}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="text-sm text-[var(--gray-text)]">
            Hiển thị {startIndex + 1} -{" "}
            {Math.min(endIndex, filteredPayments.length)} trong số{" "}
            {filteredPayments.length} giao dịch
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === 1
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }

                return (
                  <button
                    key={pageNum}
                    onClick={() => goToPage(pageNum)}
                    className={`w-10 h-10 rounded-lg font-medium transition-all ${
                      currentPage === pageNum
                        ? "bg-[var(--primary-green)] text-white shadow-sm"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg border transition-all ${
                currentPage === totalPages
                  ? "border-gray-200 text-gray-400 cursor-not-allowed"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
