import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {useHistory} from "react-router";
import CircleIcon from "@mui/icons-material/Circle";
import {useContext, useEffect, useState} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {Grow} from "@mui/material";

export default function CardBoxPageCO2() {

    const history = useHistory();
    const openPage = () => {
        history.push("/co2");
    }

    const [showImage, setShowImage] = useState(false)
    const datas = useContext(STDSDatasContext);

    const valCO2 = datas.co2;


    let colorDot= "#22B04B";
    if (valCO2 <= 20){
        colorDot = "#ED1C24";
    } else if(valCO2 <= 50){
        colorDot = "#F49229";
    }

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
                                         {250} g
                                    </Typography>

                        
                        
                                </Box>
                        </Box>



                    </Grow>  

                    </Box>
                        

                        <CircleIcon sx={{ color: colorDot, position: "absolute", right: 30}} />
                    </CardContent>
                </CardActionArea>
                
            </Card>

        </Box>
    </Box>
    );
}