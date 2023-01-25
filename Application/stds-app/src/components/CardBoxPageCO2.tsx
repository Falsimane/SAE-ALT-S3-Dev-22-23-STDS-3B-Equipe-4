import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import {useHistory} from "react-router";
import CircleIcon from "@mui/icons-material/Circle";
import {useContext, useEffect, useState} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {Grow, useTheme} from "@mui/material";
import {checkCO2} from "../utils/errors/checkErrors";
import {getErrorColor} from "../utils/errors/ErrorUtils";
import ErrorAlert from "./ErrorAlert";

export default function CardBoxPageCO2() {
    const history = useHistory();
    const theme = useTheme();
    const datas = useContext(STDSDatasContext);
    const co2Error = checkCO2(datas.co2).co2
    const colorDot = getErrorColor(co2Error.errorLevel, theme)
    const openPage = () => {
        history.push("/co2");
    }
    const [showImage, setShowImage] = useState(false)

    useEffect(() => {
        setShowImage(true)
    }, [])
    return (

        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5}}>
        <Box sx={{ width: "90%"}}>
            <Typography
                sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 1
                }}
            >
                CO2
            </Typography>


            <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                    <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                        
                    <Box sx={{ display: "flex", alignItems: "start", marginTop: 0.5, justifyContent: "center"}}>

                    <Grow in={showImage} timeout={1000} style={{ transformOrigin: '10% 10%' }}>
                        <Box sx={{ display: "flex", alignItems: "center", height: 250, width: 250, marginBottom:0.5 ,justifyContent: "center"}}>

                            <Box sx={{display: "flex" ,height:80, width:80 ,alignItems: "center"}}>

                                <img src={require('../images/planete-terre.png')} alt={""} />

                            </Box>

                                <Box sx={{display: "flex", marginLeft:3}}>

                                    <Typography sx={{fontWeight:"bold", fontSize:30 , height:50, width:80}}>
                                         {datas.co2} g
                                    </Typography>

                        
                        
                                </Box>
                        </Box>



                    </Grow>  

                    </Box>
                        

                        <CircleIcon sx={{ color: colorDot, position: "absolute", right: 30}} />
                    </CardContent>
                </CardActionArea>
                
            </Card>

            <ErrorAlert error={co2Error} />

        </Box>
    </Box>
    );
}