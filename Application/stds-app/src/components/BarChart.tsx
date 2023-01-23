import React, {useEffect} from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";
Chart.register(...registerables);

export default function BarChart(){

    const [dataSet, setDataSet] = React.useState({});

    const fetchData = () => {
        getData("T1", "24h").then(function (pfResponse) {
            setDataSet(pfResponse);
            console.log(pfResponse);
        });
    }
    fetchData();





    const data = {
        labels: ['00', '06', '12', '18'],
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)'
                ]
        }]
    };

    return (
        <Bar data={data} />
    );
}


