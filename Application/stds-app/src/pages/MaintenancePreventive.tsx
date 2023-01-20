import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "../components/CardBoxMaintenance";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";



export default function MaintenancePreventive() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="maintenance-preventive-page">
            <Header page={"Préventif"} dimensionsTitre={100}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>





                <CardBoxMaintenance titre="Gamme 1" pdfimg = {"visible"} typeGamme={"preventif"}/>
                <CardBoxMaintenance titre="Gamme 2" pdfimg = {"visible"} typeGamme={"preventif"}/>
                <br/>
                <br/>
            </IonContent>
        </IonPage>
    );
}
