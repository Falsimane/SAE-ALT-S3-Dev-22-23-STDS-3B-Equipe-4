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
    

    return (
        <IonPage id="puissance-page">
                <Header page={"Paramètres"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

            </IonContent>
        </IonPage>
    );
}
