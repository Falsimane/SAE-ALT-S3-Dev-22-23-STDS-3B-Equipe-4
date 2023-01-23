import React from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";

Chart.register(...registerables);

export default function BarChart(){

    let [dataSet, setData] = React.useState({});
    let [labels, setLabels] = React.useState<String[]>([]);

    const fetchData = () => {
        getData("T1", "24h").then(value => {
            let labels = Array.from(value.keys());
            setLabels(labels);
            setData(Array.from(value.values()));
        });
    };

    fetchData()

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Température',
                data: dataSet,
            }
        ],
        barPercentage: 1,
        categoryPercentage: 24,
        barThickness: 10,
        };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Historique de la température' as const,
                color: '#FF0000',
            },
        },
        scales: {
            y: {
                type: 'linear' as const,
                display: true,
                offset: false,
                grid: {
                    offset: false,
                },
            },
            x: {
                type: 'linear' as const,
                display: true,
                offset: false,
                grid: {
                    offset: false,
                },
            },
        },
        backgroundColor: '#FF0000',
    };

    return (
        <Bar data={data} options={options} />
    );
}


