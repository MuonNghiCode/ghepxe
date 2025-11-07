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

interface PaymentGatewayChartProps {
  payments: PaymentData[];
}

export default function PaymentGatewayChart({
  payments,
}: PaymentGatewayChartProps) {
  const chartOptions = useMemo(() => {
    const gatewayData: { [key: string]: { count: number; revenue: number } } =
      {};

    payments
      .filter((p) => p.status === "Completed")
      .forEach((p) => {
        if (!gatewayData[p.paymentGateway]) {
          gatewayData[p.paymentGateway] = { count: 0, revenue: 0 };
        }
        gatewayData[p.paymentGateway].count++;
        // Only add positive amounts to revenue
        if (p.amount > 0) {
          gatewayData[p.paymentGateway].revenue += p.amount;
        }
      });

    const gateways = Object.keys(gatewayData);
    const counts = gateways.map((g) => gatewayData[g].count);
    const revenues = gateways.map((g) => gatewayData[g].revenue);

    return {
      chart: {
        type: "column",
        height: 300,
      },
      title: {
        text: "Giao dịch theo cổng thanh toán",
        style: { fontSize: "16px", fontWeight: "bold" },
      },
      xAxis: {
        categories: gateways,
        title: {
          text: "Cổng thanh toán",
        },
      },
      yAxis: [
        {
          title: {
            text: "Số giao dịch",
          },
        },
        {
          title: {
            text: "Doanh thu (VNĐ)",
          },
          opposite: true,
          labels: {
            formatter: function (this: any) {
              return new Intl.NumberFormat("vi-VN").format(this.value);
            },
          },
        },
      ],
      tooltip: {
        shared: true,
        formatter: function (this: any) {
          let s = `<b>${this.x}</b><br/>`;
          this.points.forEach((point: any) => {
            if (point.series.name === "Doanh thu") {
              s += `${point.series.name}: ${new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(point.y)}<br/>`;
            } else {
              s += `${point.series.name}: ${point.y}<br/>`;
            }
          });
          return s;
        },
      },
      series: [
        {
          name: "Số giao dịch",
          data: counts,
          color: "#00a982",
          yAxis: 0,
        },
        {
          name: "Doanh thu",
          data: revenues,
          color: "#00d4aa",
          yAxis: 1,
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
