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
import ErrorAlert from "./Alert";

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

    let imageVal

    switch (true) {
        case (datas.co2 <= 10):
            imageVal = "12.5.png"
            break;
        case (datas.co2 <= 15 && datas.co2 > 10):
            imageVal = "25.png"
            break;
        case (datas.co2 <= 20 && datas.co2 > 15):
            imageVal = "37.5.png"
            break;
        case (datas.co2 < 30 && datas.co2 > 20):
            imageVal = "50.png";
            break;
        case (datas.co2 <= 40 && datas.co2 >= 30):
            imageVal ="62.5.png";
            break;
        case (datas.co2 < 45 && datas.co2 > 40):
            imageVal = "75.png";
            break;
        case (datas.co2 <= 50 && datas.co2 >= 45):
                imageVal = "87.5.png";
                break;
        case (datas.co2 > 50):
            imageVal = "100.png";
            break;
        default:
            imageVal = "planete-terre.png"
            break;
    }   
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

                            <Box sx={{display: "flex" ,height:100, width:100 ,alignItems: "center"}}>

                                <img src={require('../images/' +imageVal )} alt={""} />

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