import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";

export default function CardBoxPuissance(){

    const history = useHistory();
    const openPage = () => {
        history.push("/puissance");
    }

    const colorDot= "#F49229";

    let valPuissance= 85;
   
    let imageVal
  
    let calculPuissance = valPuissance;
    let radiusLiquideQuantiteTop = 0;
    let nombreApres90 = 0;
    
    

    switch (true) {
        case (valPuissance < 20):
            imageVal = "min-.png"
            break;
        case (valPuissance <= 40 && valPuissance > 20):
            imageVal = "min+.png"
            break;
        case (valPuissance <= 60 && valPuissance > 40):
            imageVal = "medium-.png";
            break;
        case (valPuissance <= 80 && valPuissance > 60):
            imageVal ="medium+.png";
            break;
        case (valPuissance <= 100 && valPuissance > 80):
            imageVal = "max-.png";
            break;
        case (valPuissance > 100):
            imageVal = "max.png";
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
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: 10, display: "flex", alignItems: "end", height: 100, marginTop: 0.5, justifyContent: "center"}}>

                                <Box sx={{position: "absolute",height:150,width:300, display:"flex",  justifyContent: "center",paddingTop:5}}>
                                    <img src={require('../images/' + imageVal)} />
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