import React from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";
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
        return String(hours) + "h";
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

    const handleChangeToday = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        fetchDataToday();
    }

    const handleChangeYesterday = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        fetchDataYesterday();
    }

    const checkDarkMode = () => {
            if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                return 'dark';
            }
        return 'warning';
    }


    const data = {
        labels: labels,
        datasets: [
            {
                data: dataSet,
            }
        ],
        label: "Température",
        };

    const options = {
        plugins: {
            responsive: true,
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
                title: {
                    display: true,
                    text: 'Température (°C)',
                    color: '#000000'
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
                title: {
                    display: true,
                    text: 'Heure',
                    color: '#000000'
                }
            },
        },
        barThickness: 6,
        backgroundColor: '#FF0000',
    };


    return (
        <Box sx={{width: "95%", backgroundColor: "#FFFFFF", borderRadius: 2, marginRight:2, marginLeft:1.3}}>
            <Box justifyContent="center" sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <Refresh title={'Rafraîchir'} color={checkDarkMode()}/>
                <HierButton color={checkDarkMode()} onChange={handleChangeYesterday} />
                <TodayButton color={checkDarkMode()} onChange={handleChangeToday} />
        </Box>
            <Bar data={data} options={options}/>
        </Box>

    );
}


