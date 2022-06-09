import { useState } from "react";
import "./chart.css";
import BarChart from "../ChartFile/BarChart";
import LineChart from "../ChartFile/LineChart";
import PieChart from "../ChartFile/PieChart";
import { UserData } from "../ChartFile/dataChart";

const Chart = () => {
  const [userData] = useState({
    labels: UserData[0].data.map((data) => data.name),
    datasets: [
      {
        label: "deaths in the country ",
        data: UserData[0].data.map((data) => data.latest_data.deaths),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  // IF YOU SEE THIS COMMENT: I HAVE GOOD EYESIGHT

  return (
    <div className="chart">
      <div style={{ width: "90%" }}>
        <BarChart dataChrt={userData} />
      </div>
      <div style={{ width: "90%"}}>
        <LineChart dataChrt={userData} />
      </div>
      <div style={{ width: "90%" }}>
        <PieChart dataChrt={userData} />
      </div>
    </div>
  );
}

  export default Chart;