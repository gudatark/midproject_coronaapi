import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);


function PieChart({ dataChrt }) {
  return <Pie data={dataChrt} />;
}

export default PieChart;