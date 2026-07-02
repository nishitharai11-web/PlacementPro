import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

function AnalyticsChart({ applications }) {
  const data = {
    labels: ["Applied", "Interview", "Offer", "Rejected"],
    datasets: [
      {
        label: "Applications",
        data: [
          applications.filter(app => app.status === "Applied").length,
          applications.filter(app => app.status === "Interview").length,
          applications.filter(app => app.status === "Offer").length,
          applications.filter(app => app.status === "Rejected").length,
        ],
        backgroundColor: [
          "#3b82f6",
          "#f59e0b",
          "#22c55e",
          "#ef4444",
        ],
      },
    ],
  };

  return (
    <div className="form-container">
      <h2>📊 Analytics</h2>

      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Pie data={data} />
      </div>

      <br />

      <Bar data={data} />
    </div>
  );
}

export default AnalyticsChart;