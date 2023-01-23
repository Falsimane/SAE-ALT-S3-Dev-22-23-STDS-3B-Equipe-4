import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import Box from "@mui/material/Box";
import CardBoxTemperature from "../components/CardBoxTemperature";
import BarChart from "../components/BarChart";
import InformationsEtat from "../components/InformationsEtat";
import Button from "../components/Button";

export default function Temperature() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="temperature-page">
                <Header page={"Température"} dimensionsTitre={130}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <Box sx={{ height:"20%", width: "90%", backgroundColor:"#FFFFFF", marginLeft: "5%", marginTop: 3, borderRadius:1}}>
                    <Box sx={{height:"3%", width: "5%", backgroundColor:"E6E6E6", marginLeft: "70%", marginTop: 0}}>
                        <Button />
                    </Box>
                    <BarChart />
                </Box>

                <InformationsEtat mesure={"Température"} nombre={0} nombre2={0}/>

                <CardBoxTemperature title={"Intérieure"}/>
                <CardBoxTemperature title={"Extérieure"}/>

            </IonContent>
        </IonPage>
    );
}