import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CircleIcon from "@mui/icons-material/Circle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Card from "@mui/material/Card";

export default function InformationsEtat(props: { mesure:string, nombre: number}) {

    let msgVert = "";
    let msgOrange = "";
    let msgRouge = "";

    let colorDot= "#22B04B";
    let texteEtat = "";

    switch (props.mesure){
        case "Q":
            msgVert = "Quantité élevée";
            msgOrange = "Quantité intermédiaire";
            msgRouge = "Quantité faible"

            if (props.nombre <= 10){
                colorDot = "#ED1C24";
                texteEtat = "Quantité faible";
            } else if(props.nombre <= 30){
                colorDot = "#F49229";
                texteEtat = "Quantité intermédiaire";
            } else {
                texteEtat = "Quantité élevée";
            }
            break;
    }


    const openInformationsEtat = () => {
    }

    return (
        <Card sx={{ backgroundColor: "#E6E6E6", height: 40, width: "80%", marginLeft: "10%", marginTop: 5}}>
            <CardActionArea onClick={openInformationsEtat} sx={{height: '100%'}}>
                <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>

                    <Typography sx={{fontWeight:"bold",paddingLeft:"4%"}}>
                        ÉTAT
                    </Typography>



                    <Divider sx = {{ color:"blue",paddingLeft:"4%"} } orientation="vertical" variant="middle" />



                    <CircleIcon sx={{ color: colorDot , marginLeft: "3%",  marginRight: "1%",  left :"30%"}} fontSize = "small"/>


                    <Typography sx={{fontWeight:"bold",paddingLeft:"3%", fontSize:12}}>
                        {texteEtat}
                    </Typography>

                    <InfoOutlinedIcon sx={{position: "absolute", right: "15%", marginLeft: "10%", color:"blue" }}/>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}