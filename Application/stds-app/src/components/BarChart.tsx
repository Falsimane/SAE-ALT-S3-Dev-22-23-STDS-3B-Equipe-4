import React, {useContext} from "react";
import {Chart, registerables} from 'chart.js';
import {Bar} from "react-chartjs-2";
import getData from "../utils/db/GetData";
import { Box } from "@mui/material";
import HierButton from "./ButtonHistory/HierSwitchButton";
import TodayButton from "./ButtonHistory/TodaySwitchButton";
import ServerAddressContext from "../utils/serveraddress/ServerAddressContext";

Chart.register(...registerables);

export default function BarChart(props: { measurement: string, labelX: string, labelY: string, title: string }) {

    const url = "http://" +useContext(ServerAddressContext).serverAddress + ":8086";

    let [dataSet, setData] = React.useState({});
    let [labels, setLabels] = React.useState<String[]>([]);

    const fetchDataYesterday = () => {
        getData(props.measurement, "yesterday", url).then(value => {
            let labels = Array.from(value.keys());
            setLabels(labels);
            setData(Array.from(value.values()));
        }).catch(() => {
            setLabels([])
            setData({})
        });
    };

    React.useEffect(() => {
        fetchDataToday();
    });

    const fetchDataToday = () => {
        getData(props.measurement, 'today', url).then(value => {
            let labels = Array.from(value.keys());
            setLabels(labels);
            setData(Array.from(value.values()));
        }).catch(() => {
            setLabels([])
            setData({})
        });
    }

    const [isSelectHier, setIsSelectHier] = React.useState(false);
    const [isSelectToday, setIsSelectToday] = React.useState(true);


    const handleChangeToday = () => {
        setIsSelectToday(true);
        setIsSelectHier(false);
        fetchDataToday();
    }

    const handleChangeYesterday = () => {
        setIsSelectHier(true)
        setIsSelectToday(false);
        fetchDataYesterday();
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
            responsive: true,
            legend: {
                display: false,
                position: 'top' as const,
            },
            title: {
                display: true,
                text: props.title,
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
                    text: props.labelY,
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
                    text: props.labelX,
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
                <HierButton onChange={handleChangeYesterday} selected={isSelectHier}/>
                <TodayButton onChange={handleChangeToday} selected={isSelectToday}/>
            </Box>

            <Box sx={{paddingRight: 2, paddingLeft: 2, backgroundColor: '#ffffff'}}>
                <Bar data={data} options={options}/>
            </Box>

            </>


);
}


