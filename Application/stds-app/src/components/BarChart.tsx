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

        });
    }

    const options = {
        plugins: {
            legend: {
                display:false,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Historique de la température' as const,
            },
        },
        scales: {
            x: {
                type: 'linear' as const,
                offset: false,
                grid: {
                    offset: false,
                }
            }
        }
    };


    const data = {
        datasets: [{
            data: [
                {x: 0, y:25},
                {x: 1, y:28},
                {x: 2, y:29},
                {x: 3, y:30},
                {x: 4, y:25},
                {x: 5, y:25},
                {x: 6, y:19},
                {x: 7, y:26},
                {x: 8, y:25},
                {x: 9, y:28},
                {x: 10, y:29},
                {x: 11, y:30},
                {x: 12, y:25},
                {x: 13, y:25},
                {x: 14, y:19},
                {x: 15, y:26},
                {x: 16, y:29},
                {x: 17, y:30},
                {x: 18, y:25},
                {x: 19, y:25},
                {x: 20, y:19},
                {x: 21, y:26},
                {x: 22, y:26},
                {x: 23, y:26},
                {x: 24, y:26}
            ],
            backgroundColor: [
                '#FF0000'
            ],
            borderColor: [
                '#FFFFFF'
            ],
            borderWidth: 1,
            barPercentage: 1,
            categoryPercentage: 24,
            barThickness: 10,
            tension: 0.1
        }],
    };

    return (
        <Bar data={data} options={options}/>
    );
}


