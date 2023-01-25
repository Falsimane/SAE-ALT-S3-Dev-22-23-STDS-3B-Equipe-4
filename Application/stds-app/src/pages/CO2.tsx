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
   
    let imageVal;

    

    return (
        <IonPage id="co2-page">
                <Header page={"CO2"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <BarChart measurement={'co2'}  labelX={'Heure'} labelY={'Co2 (kg de carbone)'} title={'Historique du Co2'}/>

                <InformationsEtat mesure={"CO2"} nombre={valCO2} nombre2={0}/>

                    <Box sx={{ height:"40%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3, marginTop: "15%",  display:"flex",  justifyContent:"center", alignItems:"center"}}>
                        <Box sx={{display: "flex" ,height:80, width:150 ,alignItems: "center"}}>

                            <img src={require('../images/planete-terre.png')} alt={""}/>
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
