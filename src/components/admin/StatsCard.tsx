import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  change: string;
  changeType?: "increase" | "decrease";
}

export default function StatsCard({
  title,
  value,
  icon: Icon,
  change,
  changeType = "increase",
}: StatsCardProps) {
  return (
    <div className="relative bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-green)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary-green)] to-[var(--secondary-green)] rounded-xl flex items-center justify-center shadow-lg shadow-[var(--primary-green)]/20 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-7 h-7 text-white" />
          </div>
          <div
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm font-semibold ${
              changeType === "increase"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span className={changeType === "increase" ? "↑" : "↓"}></span>
            {change}
          </div>
        </div>
        <h3 className="text-[var(--gray-text)] text-sm font-medium mb-2 uppercase tracking-wide">
          {title}
        </h3>
        <p className="text-3xl font-extrabold text-gray-900 tracking-tight">
          {value}
        </p>
      </div>
    </div>
  );
}
