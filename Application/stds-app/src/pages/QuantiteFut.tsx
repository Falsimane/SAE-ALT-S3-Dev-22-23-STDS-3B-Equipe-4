import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import {IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from '@mui/material/Divider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function QuantiteFut() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="quantitefut-page">
            
            <Header page={"Quantité Fût"} dimensionsTitre={110}/>
            
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Box sx={{ height:"7%", width: "80%", backgroundColor:"#E6E6E6",  margin:"10%", borderRadius:3, display:"flex", alignItems:"center"}}>

                    <Typography sx={{fontWeight:"bold",paddingLeft:"4%"}}>
                        ETAT
                    </Typography>



                    <Divider sx = {{ color:"blue",paddingLeft:"4%"} } orientation="vertical" variant="middle" />



                    <CircleIcon sx={{ color: "#ED1C24" , marginLeft: "2%",  marginRight: "1%",  left :"30%"}} fontSize = "medium"/>


                    <Typography sx={{fontWeight:"bold",paddingLeft:"2%", fontSize:12}}>
                        Puissance correcte
                    </Typography>

                    <InfoOutlinedIcon sx={{marginLeft: "3%", color:"blue" }}/>


                    </Box>


               
                </IonContent>
        </IonPage>
    );
}
