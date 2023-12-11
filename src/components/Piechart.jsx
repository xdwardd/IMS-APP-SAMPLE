import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js/auto";
ChartJS.register(ArcElement, Tooltip);

const PieChart = () => {
  const data = {
    labels: ["Korean", "American", "Vietnamese"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    // maintainAspectRatio: false, // Set to false to allow manual adjustment of width and height
    // aspectRatio: 1, // Adjust this value to set the aspect ratio (width/height) of the chart
    // You can add other chart options here
  };

  return (
    <div className="h-96 w-96">
      {" "}
      {/* Adjust height and width using tailwind classes */}
      {data.labels.map((data) => {
        <h1>{data}</h1>;
        console.log(data);
      })}
      <div className="">
        <Doughnut data={data} options={options} />{" "}
      </div>
    </div>
  );
};

export default PieChart;
