export default function DashboardSkeleton() {
  return (
    <div className="space-y-8 animate-pulse">
      {/* Welcome Section Skeleton */}
      <div className="relative bg-gradient-to-r from-gray-200 to-gray-300 rounded-2xl p-8 h-40 overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 rounded-full -ml-24 -mb-24"></div>
        <div className="relative z-10 space-y-3">
          <div className="h-10 bg-white/30 rounded-lg w-96"></div>
          <div className="h-6 bg-white/20 rounded-lg w-64"></div>
        </div>
      </div>

      {/* Stats Grid Skeleton */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="w-14 h-14 bg-gray-200 rounded-xl"></div>
              <div className="h-8 w-16 bg-gray-200 rounded-full"></div>
            </div>
            <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
            <div className="h-8 bg-gray-200 rounded w-32"></div>
          </div>
        ))}
      </div>

      {/* Charts Section Skeleton */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          <div className="h-5 bg-gray-200 rounded w-32"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {[1, 2].map((item) => (
            <div
              key={item}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6"
            >
              <div className="h-6 bg-gray-200 rounded w-40 mb-4"></div>
              <div className="h-64 bg-gray-100 rounded-lg"></div>
            </div>
          ))}
        </div>

        {/* Full Width Chart Skeleton */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="h-72 bg-gray-100 rounded-lg"></div>
        </div>
      </div>

      {/* Transaction Table Skeleton */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <div className="h-8 bg-gray-200 rounded w-48"></div>
            <div className="h-8 w-24 bg-gray-200 rounded-full"></div>
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 h-11 bg-gray-100 rounded-lg"></div>
            <div className="h-11 w-48 bg-gray-100 rounded-lg"></div>
          </div>
        </div>

        {/* Table */}
        <div className="space-y-3">
          {/* Table Header */}
          <div className="grid grid-cols-6 gap-4 pb-3 border-b border-gray-200">
            {[1, 2, 3, 4, 5, 6].map((col) => (
              <div key={col} className="h-4 bg-gray-200 rounded w-20"></div>
            ))}
          </div>

          {/* Table Rows */}
          {[1, 2, 3, 4, 5].map((row) => (
            <div
              key={row}
              className="grid grid-cols-6 gap-4 py-4 border-b border-gray-100"
            >
              <div className="h-5 bg-gray-100 rounded w-24"></div>
              <div className="h-5 bg-gray-100 rounded w-full"></div>
              <div className="h-5 bg-gray-100 rounded w-20"></div>
              <div className="h-6 bg-gray-100 rounded-full w-20"></div>
              <div className="h-5 bg-gray-100 rounded w-24"></div>
              <div className="h-5 bg-gray-100 rounded w-32"></div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          <div className="h-5 bg-gray-200 rounded w-48"></div>
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
            {[1, 2, 3, 4, 5].map((page) => (
              <div
                key={page}
                className="h-10 w-10 bg-gray-200 rounded-lg"
              ></div>
            ))}
            <div className="h-10 w-10 bg-gray-200 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
