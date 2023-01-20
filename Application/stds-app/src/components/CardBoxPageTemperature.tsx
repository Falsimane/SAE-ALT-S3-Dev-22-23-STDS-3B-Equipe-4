import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import HalfDonut from "./HalfDonut";

export default function CardBoxTemperature(){

    const history = useHistory();
    const openPage = () => {
        history.push("/temperature");
    }

    const datas = useContext(STDSDatasContext);

    function getColorTemp(temperature: number) {
        if (temperature > 30) {
            return "#ED1C24";
        } else if (temperature > 20) {
            return "#FFC20A";
        } else {
            return "#22B04B";
        }
    }

    return (
        <Box sx={{width: '90%', margin: 'auto'}}>
            <Typography sx={{textAlign: "left",fontWeight: "bold",fontSize: 20,marginBottom: 1}}>
                    Températures
            </Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Card sx={{ backgroundColor: "#E6E6E6", height: 120,width: "48%" }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>    
                            <Box sx={{marginLeft: '15%', textAlign:'center'}}>
                                <HalfDonut value={datas.temp1} width={100} valueColor={getColorTemp(datas.temp1)}/>
                                <Typography>Fût</Typography>
                            </Box> 
                            <CircleIcon sx={{ color: getColorTemp(datas.temp1)}} />
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ backgroundColor: "#E6E6E6", height: 120,width: "48%" }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>                          
                            <Box sx={{marginLeft: '15%'}}>
                                <HalfDonut value={datas.temp2} width={100} valueColor={getColorTemp(datas.temp2)}/>
                                <Typography>Ambiante</Typography>
                            </Box>           
                            <CircleIcon sx={{ color: getColorTemp(datas.temp1)}} />
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>
        </Box>
    );
}