import { Search, Filter, ChevronDown } from "lucide-react";

interface OrderFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  statusFilter: string;
  onStatusChange: (value: string) => void;
  resultsCount: number;
  totalCount: number;
  onClearSearch: () => void;
}

export default function OrderFilters({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  resultsCount,
  totalCount,
  onClearSearch,
}: OrderFiltersProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
          <input
            type="text"
            placeholder="Tìm kiếm theo mã đơn, địa chỉ, loại hàng..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent"
          />
        </div>

        {/* Status Filter */}
        <div className="relative sm:w-48">
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value)}
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent appearance-none bg-white cursor-pointer"
          >
            <option value="All">Tất cả trạng thái</option>
            <option value="Paid">Đã thanh toán</option>
            <option value="Pending">Chờ xử lý</option>
            <option value="In_Progress">Đang giao</option>
            <option value="Completed">Hoàn thành</option>
            <option value="Cancelled">Đã hủy</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)] pointer-events-none" />
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 flex items-center justify-between text-sm">
        <span className="text-[var(--gray-text)]">
          Hiển thị {resultsCount} trong tổng số {totalCount} đơn hàng
        </span>
        {searchTerm && (
          <button
            onClick={onClearSearch}
            className="text-[var(--primary-green)] hover:underline"
          >
            Xóa tìm kiếm
          </button>
        )}
      </div>
    </div>
  );
}
