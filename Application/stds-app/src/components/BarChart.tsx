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

    /* launch fetchData of today just one time */


    React.useEffect(() => {
        fetchDataYesterday();
    }, []);

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

    const [checked, setChecked] = React.useState(false);

    const handleChangeToday = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        fetchDataToday();
    }

    const handleChangeYesterday = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        fetchDataYesterday();
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
        <>
            <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#ffffff'}}>
                <Refresh title={'Rafraîchir'} color={'warning'}/>
                <HierButton color={'warning'} onChange={handleChangeYesterday}/>
                <TodayButton color={'warning'} onChange={handleChangeToday}/>
            </Box>

            <Box sx={{paddingRight: 2, paddingLeft: 2, backgroundColor: '#ffffff'}}>
                <Bar data={data} options={options}/>
            </Box>

            </>


);
}


