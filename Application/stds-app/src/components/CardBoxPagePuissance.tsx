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


export default function CardBoxPuissance(){

    const history = useHistory();
    const openPage = () => {
        history.push("/puissance");
    }

    const datas = useContext(STDSDatasContext);

    const valPuissance = datas.puissance;

    let colorDot= "#22B04B";
   
   
    if (valPuissance >= 70 || valPuissance === 0){
        colorDot = "#ED1C24";
        
    } else if(valPuissance < 60){
        colorDot = "#F49229";
        
    }
    
    
   
    let imageVal;
    
    

    switch (true) {
        case (valPuissance < 10):
            imageVal = "min-.png"
            break;
        case (valPuissance <= 20 && valPuissance > 10):
            imageVal = "min+.png"
            break;
        case (valPuissance <= 40 && valPuissance > 20):
            imageVal = "medium-.png";
            break;
        case (valPuissance <= 60 && valPuissance > 40):
            imageVal ="medium+.png";
            break;
        case (valPuissance <= 80 && valPuissance > 60):
            imageVal = "max-.png";
            break;
        case (valPuissance > 80):
            imageVal = "max+.png";
            break;
        default:
            imageVal = "min-.png"
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
                >Puissance
                    
                </Typography>


                <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%"}}>


                            <Box sx={{ display: "flex", alignItems: "start", marginTop: 0.5, justifyContent: "center"}}>

                            <Box sx={{ display: "flex", alignItems: "center", height: 250, width: 200, marginBottom:0.5 ,justifyContent: "center"}}>
                               
                                <Box sx={{display: "flex" ,height:140, width:80 ,alignItems: "center"}}>

                                    <img src={require('../images/' + imageVal)} alt={""} />

                                </Box>

                                <Box sx={{display: "flex"}}>

                                    <Typography sx={{fontWeight:"bold", fontSize:30 , height:50, width:80}}>
                                        {valPuissance} W
                                    </Typography>

                                </Box>

                                
                            </Box>


                            </Box>
                            <CircleIcon sx={{ color: colorDot, position: "absolute", right: 30}} />
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    );
}