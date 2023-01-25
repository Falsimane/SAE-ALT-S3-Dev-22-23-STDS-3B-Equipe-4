import * as React from "react";
import {useContext} from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import HalfDonut from "./HalfDonut";
import {Alert, Box, Card, CardActionArea, CardContent, Typography} from "@mui/material";

export default function CardBoxTemperature(){

    const history = useHistory();
    const openPage = () => {
        history.push("/temperature");
    }

    const openPageAmbiante = () => {
        history.push("/temperature-interieure");
    }

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
        <Box sx={{width: '90%', margin: 'auto'}}>
            <Typography sx={{textAlign: "left",fontWeight: "bold",fontSize: 20,marginBottom: 1}}>
                    Températures
            </Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Card sx={{ backgroundColor: "#E6E6E6", width: "48%" }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: '15%', textAlign:'center'}}>
                                <HalfDonut value={(datas.temp2+10)*2} width={100} valueColor={getStateTemp2(datas.temp2).color}/>
                                <Typography>Fût <br/>{datas.temp2}C°</Typography>
                            </Box>
                            <CircleIcon sx={{ color: getStateTemp2(datas.temp2).color, position: "absolute", right: 5}} />
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ backgroundColor: "#E6E6E6", width: "48%" }}>
                    <CardActionArea onClick={openPageAmbiante} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: '15%'}}>
                                <HalfDonut value={(datas.temp1+10)*2} width={100} valueColor={getStateTemp1(datas.temp1).color}/>
                                <Typography>Ambiante <br/>{datas.temp1}C°</Typography>
                            </Box>

                            <CircleIcon sx={{ color: getStateTemp1(datas.temp1).color, position: "absolute", right: 5}} />

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
            <Alert severity={getStateTemp2(datas.temp2).alert} sx={{marginTop:2}}>{getStateTemp2(datas.temp2).message}</Alert>
            <Alert severity={getStateTemp1(datas.temp1).alert} sx={{marginTop:2}}>{getStateTemp1(datas.temp1).message}</Alert>
        </Box>
    );
}