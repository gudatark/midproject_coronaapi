import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);


function LineChart({ dataChrt }) {
  return <Line data={dataChrt} />;
}

export default LineChart;