"use client";
import { useMemo } from "react";
import { PaymentData } from "@/types/responses";

// Import Highcharts dynamically
let Highcharts: any = null;
let HighchartsReact: any = null;

if (typeof window !== "undefined") {
  Highcharts = require("highcharts");
  HighchartsReact = require("highcharts-react-official").default;
}

interface PaymentStatusChartProps {
  payments: PaymentData[];
}

export default function PaymentStatusChart({
  payments,
}: PaymentStatusChartProps) {
  const chartOptions = useMemo(() => {
    const statusCount: { [key: string]: number } = {};

    payments.forEach((p) => {
      statusCount[p.status] = (statusCount[p.status] || 0) + 1;
    });

    const colors: { [key: string]: string } = {
      Completed: "#10b981",
      Pending: "#f59e0b",
      Failed: "#ef4444",
      Cancelled: "#6b7280",
    };

    return {
      chart: {
        type: "pie",
        height: 300,
      },
      title: {
        text: "Phân bổ trạng thái giao dịch",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      tooltip: {
        pointFormat:
          "{series.name}: <b>{point.y}</b> ({point.percentage:.1f}%)",
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          dataLabels: {
            enabled: true,
            format: "<b>{point.name}</b>: {point.percentage:.1f}%",
          },
        },
      },
      series: [
        {
          name: "Số lượng",
          colorByPoint: true,
          data: Object.keys(statusCount).map((status) => ({
            name: status,
            y: statusCount[status],
            color: colors[status] || "#6b7280",
          })),
        },
      ],
      credits: { enabled: false },
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
