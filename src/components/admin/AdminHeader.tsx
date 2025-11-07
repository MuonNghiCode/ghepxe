"use client";
import { Bell, Search } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 fixed top-0 left-64 right-0 z-50 shadow-sm">
      <div className="h-full flex items-center justify-between px-6">
        {/* Search */}
        <div className="flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[var(--gray-text)]" />
            <input
              type="text"
              placeholder="Tìm kiếm trong hệ thống..."
              className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--primary-green)] focus:border-transparent transition-all text-gray-800"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Notifications */}
          <button className="relative p-3 hover:bg-gray-100 rounded-xl transition-all group">
            <Bell className="w-5 h-5 text-[var(--gray-text)] group-hover:text-[var(--primary-green)] transition-colors" />
            <span className="absolute top-2 right-2 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
