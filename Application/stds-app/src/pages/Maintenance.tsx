
import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "../components/CardBoxMaintenance";
import {IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";

export default function Maintenance() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="home-page">
            <IonHeader>
                <Header page={"Maintenance"} dimensionsTitre={130}/>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <CardBoxMaintenance titre="Notice d'utilisation" pdfimg = {true} />
                <CardBoxMaintenance titre="Manuel de service" pdfimg = {true} />
                <CardBoxMaintenance titre="Maintenance préventive" pdfimg = {false}/>
                <CardBoxMaintenance titre="Maintenance curative" pdfimg = {false}/>
            </IonContent>
        </IonPage>
    );
}
