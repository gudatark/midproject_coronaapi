import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);


function BarChart({ dataChrt }) {
  return <Bar data={dataChrt} />;
}

export default BarChart;