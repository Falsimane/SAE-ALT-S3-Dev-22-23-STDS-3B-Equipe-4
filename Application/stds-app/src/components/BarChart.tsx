import React from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";
import Switch from "./ButtonHistory/TodaySwitchButton";
import Refresh from "./ButtonHistory/RefreshButton";
import { Box } from "@mui/material";
import HierButton from "./ButtonHistory/HierSwitchButton";
import TodayButton from "./ButtonHistory/TodaySwitchButton";

Chart.register(...registerables);

export default function BarChart(){

    let [dataSet, setData] = React.useState({});
    let [labels, setLabels] = React.useState<String[]>([]);

    const fetchDataYesterday = () => {
        getData("T1", "1d").then(value => {
            let labels = Array.from(value.keys());
            setLabels(labels);
            setData(Array.from(value.values()));
        });
    };

    const numberOfHours = () => {
        let date = new Date();
        let hours = date.getHours();
        return String(hours);
    }

    const fetchDataToday = () => {
        getData("T1", numberOfHours()).then(value => {
            let labels = Array.from(value.keys());
            setLabels(labels);
            setData(Array.from(value.values()));
        });
    }

    /* Control the onClick event of the switch button */
    const [checked, setChecked] = React.useState(false);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);

        if (event.target.checked) {
            fetchDataToday();
        }
        else {
            fetchDataYesterday();
        }
    }


    const data = {
        labels: labels,
        datasets: [
            {
                data: dataSet,
            }
        ],
        };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Historique de la température',
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
                ticks: {
                    beginAtZero: true,
                    stepSize: 6,
                    maxTicksLimit: 24,
                },
                min: 0,
                max: 23,
            },
        },
        barThickness: 6,
        backgroundColor: '#FF0000',
    };


    return (
        <Box sx={{ height:"20%", width: "90%", backgroundColor:"#FFFFFF", marginLeft: "5%", marginTop: 3, borderRadius:1}}>
            <Refresh title={'Rafraîchir'} color={'dark'}/>
            <HierButton color={'dark'} onChange={handleChange} />
            <TodayButton color={'dark'} onChange={handleChange} />
            <Bar data={data} options={options}/>
        </Box>
    );
}


