import React from 'react';
import {Doughnut} from "react-chartjs-2";
import {Chart, ArcElement} from 'chart.js'
import Box from "@mui/material/Box";
Chart.register(ArcElement);

export default function TemperatureChart(props: { valueColor?: string; emptyColor?: string; valueBorderColor?: string; emptyBorderColor?: string; value: number; height?: number; width?: number; }) {

  const data = {
    labels: ["Bière", "Vide"],
    datasets: [
      {
        label: "Niveau de bière",
        data: [props.value, 100-props.value],
        backgroundColor: [
          props.valueColor ? props.valueColor : "rgb(255,196,0)",
          props.emptyColor ? props.emptyColor : "rgba(168,168,168,0.6)",
        ],
        borderColor: [
          props.valueBorderColor,
          props.emptyBorderColor,
        ],
        borderWidth: 1
      }
    ]
  }

    const options = {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false
        }
      },
      rotation: -90,
      circumference: 180,
      cutout: "60%",
      maintainAspectRatio: true,
      responsive: true
    }

    return (
        <Box width={props.width?props.width:'100%'} height={props.height?props.height:'100%'}>
        <Doughnut data={data} options={options} updateMode={'resize'}/>
        </Box>
          );
}