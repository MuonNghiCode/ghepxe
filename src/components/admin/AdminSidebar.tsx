"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Users,
  Package,
  FileText,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "@/context/AuthContext";

const menuItems = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    href: "/admin",
  },
  {
    title: "Người dùng",
    icon: Users,
    href: "/admin/users",
  },
  {
    title: "Đơn hàng",
    icon: Package,
    href: "/admin/orders",
  },
  {
    title: "Báo cáo",
    icon: FileText,
    href: "/admin/reports",
  },
  {
    title: "Cài đặt",
    icon: Settings,
    href: "/admin/settings",
  },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const { logout, user } = useAuth();

  const handleLogout = async () => {
    await logout();
    window.location.href = "/login";
  };

  return (
    <aside className="w-64 bg-gradient-to-b from-white to-gray-50 border-r border-gray-200 flex flex-col h-screen fixed left-0 top-0 shadow-lg">
      {/* Logo with Gradient */}
      <div className="h-16 flex items-center px-6 border-b border-gray-200 bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)]">
        <h1
          className="text-2xl font-bold text-white"
          style={{ fontFamily: "var(--font-roboto-serif)" }}
        >
          GhepXe Admin
        </h1>
      </div>

      {/* User Info with Enhanced Design */}
      <div className="px-6 py-5 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] flex items-center justify-center text-white font-bold text-lg shadow-lg">
              {user?.username?.charAt(0).toUpperCase() || "A"}
            </div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold text-gray-900 truncate">
              {user?.username || "Admin"}
            </p>
            <p className="text-xs text-[var(--gray-text)] truncate">
              {user?.email || "admin@ghepxe.com"}
            </p>
          </div>
        </div>
      </div>

      {/* Menu Items with Enhanced Design */}
      <nav className="flex-1 px-4 py-6 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`group flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-gradient-to-r from-[var(--primary-green)] to-[var(--secondary-green)] text-white shadow-lg shadow-[var(--primary-green)]/30"
                      : "text-[var(--gray-text)] hover:bg-gray-100 hover:text-[var(--primary-green)]"
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg transition-all ${
                      isActive
                        ? "bg-white/20"
                        : "bg-gray-100 group-hover:bg-[var(--primary-green)]/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">{item.title}</span>
                  {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Logout Button with Enhanced Design */}
      <div className="px-4 py-4 border-t border-gray-200 bg-white">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-red-600 hover:bg-red-50 transition-all duration-300 group hover:shadow-md"
        >
          <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-100 transition-all">
            <LogOut className="w-5 h-5" />
          </div>
          <span className="font-semibold">Đăng xuất</span>
        </button>
      </div>
    </aside>
  );
}
