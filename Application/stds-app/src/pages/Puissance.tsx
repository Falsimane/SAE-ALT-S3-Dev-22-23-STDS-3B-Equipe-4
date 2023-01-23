import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import InformationsEtat from "../components/InformationsEtat";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";

export default function Puissance() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const datas = useContext(STDSDatasContext);
    const valPuissance = datas.puissance;
   
    let imageVal;

    switch (true) {
        case (valPuissance <= 0):
            imageVal = "puissanceError.png"
            break;
        case (valPuissance <= 20 && valPuissance > 0):
            imageVal = "min-.png"
            break;
        case (valPuissance <= 30 && valPuissance > 20):
            imageVal = "min+.png"
            break;
        case (valPuissance <= 40 && valPuissance > 30):
            imageVal = "medium-.png";
            break;
        case (valPuissance <= 50 && valPuissance > 40):
            imageVal ="medium+.png";
            break;
        case (valPuissance <= 60 && valPuissance > 50):
            imageVal = "max-.png";
            break;
        case (valPuissance <= 80 && valPuissance > 60):
                imageVal = "max+.png";
                break;
        case (valPuissance > 80):
            imageVal = "Surpuissance.png";
            break;
        default:
            imageVal = "min-.png"
            break;
    }   

    return (
        <IonPage id="puissance-page">
                <Header page={"Puissance"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                    <Box sx={{ height:"20%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3}}/>

                    <InformationsEtat mesure={"Puissance"} nombre={valPuissance} nombre2={0}/>

                    <Box sx={{ height:"40%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3, marginTop: "15%",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{display: "flex" ,height:100, width:175 ,alignItems: "center"}}>
                            <img src={require('../images/' + imageVal)} alt={""}/>
                        </Box>

                        <Box sx={{display: "flex"}}>

                            <Typography sx={{fontWeight:"bold", fontSize:30 , height:50, width:80, color:"black"}}>
                                {valPuissance} W
                            </Typography>

                        </Box>
                    </Box>

                    


               
            </IonContent>
        </IonPage>
    );
}
