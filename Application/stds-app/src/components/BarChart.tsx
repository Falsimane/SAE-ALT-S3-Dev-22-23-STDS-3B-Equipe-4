import React from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";
import Switch from "./SwitchButtonChart";
import Refresh from "./RefreshButton";
import { Box } from "@mui/material";

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

    React.useEffect(() => {
        fetchDataYesterday();
    }, []);

    const data = {
        labels: labels,
        datasets: [
            {
                data: dataSet,
            }
        ],
        };

    const dateOfYesterday = () => {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        return day + "/" + month + "/" + year;
    };

    const options = {
        plugins: {
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: dateOfYesterday(),
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
            <Switch title={'Hier'} color={'dark'}/>
            <Switch title={'Aujourd\'hui'} color={'dark'}/>
            <Bar data={data} options={options}/>
        </Box>
    );
}


