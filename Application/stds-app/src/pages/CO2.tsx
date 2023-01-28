import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import InformationsEtat from "../components/InformationsEtat";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import BarChart from "../components/BarChart";


export default function CO2() {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const datas = useContext(STDSDatasContext);
    const valCO2 = datas.co2;
   
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
        <IonPage id="co2-page">
                <Header page={"CO2"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <BarChart measurement={'co2'}  labelX={'Heure'} labelY={'Co2 (kg de carbone)'} title={'Historique du Co2'}/>

                <InformationsEtat mesure={"CO2"} nombre={valCO2}/>

                    <Box sx={{ height:"40%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3, marginTop: "15%",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{display: "flex" ,height:80, width:150 ,alignItems: "center"}}>

                            <img src={require('../images/' +imageVal)} alt={""}/>
                        </Box>

                        <Box sx={{display: "flex", marginLeft:4}}>

                            <Typography sx={{fontWeight:"bold", fontSize:30 , height:50, width:80, color:"black"}}>
                                {valCO2} g
                            </Typography>

                        </Box>
                    </Box>

                    


               
            </IonContent>
        </IonPage>
    );
}
