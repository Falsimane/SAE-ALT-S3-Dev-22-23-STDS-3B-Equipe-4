import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import HalfDonut from "./HalfDonut";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";

export default function CardBoxTemperature(){

    const history = useHistory();

    const datas = useContext(STDSDatasContext);

    function getStateTemp1(temperature: number) {
        if (temperature > 40) {
            return { color: "#ED1C24", message: "Attention, la température ambiante est trop élevée !", alert : 'error'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        } else if (temperature > 30) {
            return { color: "#FFC20A", message: "Attention, la température ambiante est legèrement trop élevée !", alert : 'warning'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        } else {
            return { color: "#22B04B", message: "La température ambiante est bonne !", alert : 'success'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        }
    }

    function getStateTemp2(temperature: number) {
        if (temperature > 10) {
            return { color: "#ED1C24", message: "Attention, la bière est trop chaude !", alert : 'error'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        } else if (temperature >= 7) {
            return { color: "#FFC20A", message: "Attention, la bière est légèrement trop chaude !", alert : 'warning'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        } else if (temperature >= -2) {
            return { color: "#22B04B", message: "La bière est à bonne température !", alert : 'success'} as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        } else {
            return { color: "#ED1C24", message: "Attention, la bière est trop froide !", alert : 'error' } as { color: string; message: string; alert: 'error' | 'warning' | 'info' | 'success'}
        }
    }

    return (
        <Box >
            <Box sx={{ display:'flex', justifyContent: "center", marginTop: 5 }}>
                <Card sx={{ backgroundColor: "#E6E6E6", width: "90%", height: 120 }}>
                        <CardContent sx={{display: "flex", justifyContent: 'space-around',alignItems : 'center', height: "100%", padding : 0}}>
                            <HalfDonut value={(datas.temp2+10)*2} width={100} height={100} valueColor={getStateTemp2(datas.temp2).color} />
                            <Box width={70}>
                                <Typography textAlign={"center"}>Fût <br/>{datas.temp2}C°</Typography>
                            </Box>
                            <CircleIcon sx={{ color: getStateTemp2(datas.temp2).color}} />
                        </CardContent>
                </Card>
            </Box>
            <Box sx={{ display:'flex', justifyContent: "center", marginTop: 2 }}>
                <Card sx={{ backgroundColor: "#E6E6E6", width: "90%",height: 120 }}>
                        <CardContent sx={{display: "flex", justifyContent: 'space-around',alignItems : 'center', height: "100%", padding : 0}}>
                            <HalfDonut value={(datas.temp1+10)*2} width={100} height={100} valueColor={getStateTemp1(datas.temp1).color}/>
                            <Box width={70}>
                                <Typography textAlign={"center"}>Ambiante <br/>{datas.temp1}C°</Typography>
                            </Box>
                            <CircleIcon sx={{ color: getStateTemp1(datas.temp1).color}} />
                        </CardContent>
                </Card>
            </Box>
        </Box>
    );
}