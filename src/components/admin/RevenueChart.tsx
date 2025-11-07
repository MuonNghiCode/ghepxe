"use client";
import { useMemo } from "react";
import { PaymentData } from "@/types/responses";

// Import Highcharts dynamically
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let Highcharts: any = null;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let HighchartsReact: any = null;

if (typeof window !== "undefined") {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  Highcharts = require("highcharts");
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  HighchartsReact = require("highcharts-react-official").default;
}

interface RevenueChartProps {
  payments: PaymentData[];
}

export default function RevenueChart({ payments }: RevenueChartProps) {
  const chartOptions = useMemo(() => {
    // Group by date - only count positive amounts from completed transactions
    const revenueByDate: { [key: string]: number } = {};

    payments
      .filter((p) => p.status.toLowerCase() === "completed" && p.amount > 0)
      .forEach((p) => {
        const date = new Date(p.createdAt).toLocaleDateString("vi-VN");
        revenueByDate[date] = (revenueByDate[date] || 0) + p.amount;
      });

    const sortedDates = Object.keys(revenueByDate).sort(
      (a, b) =>
        new Date(a.split("/").reverse().join("-")).getTime() -
        new Date(b.split("/").reverse().join("-")).getTime()
    );
    const revenueData = sortedDates.map((date) => revenueByDate[date]);

    return {
      chart: {
        type: "area",
        height: 300,
      },
      title: {
        text: "Doanh thu theo ngày",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      xAxis: {
        categories: sortedDates.slice(-30), // Last 30 days
        title: {
          text: "Ngày",
        },
      },
      yAxis: {
        title: { text: "Doanh thu (VNĐ)" },
        labels: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          formatter: function (this: any) {
            return new Intl.NumberFormat("vi-VN").format(this.value);
          },
        },
      },
      tooltip: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: function (this: any) {
          return `<b>${this.x}</b><br/>Doanh thu: ${new Intl.NumberFormat(
            "vi-VN",
            {
              style: "currency",
              currency: "VND",
            }
          ).format(this.y)}`;
        },
      },
      series: [
        {
          name: "Doanh thu",
          data: revenueData.slice(-30),
          color: "#00a982",
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "rgba(0, 169, 130, 0.3)"],
              [1, "rgba(0, 169, 130, 0)"],
            ],
          },
        },
      ],
      credits: { enabled: false },
      legend: {
        enabled: false,
      },
    };
  }, [payments]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      {typeof window !== "undefined" && Highcharts && HighchartsReact && (
        <HighchartsReact highcharts={Highcharts} options={chartOptions} />
      )}
    </div>
  );
}
