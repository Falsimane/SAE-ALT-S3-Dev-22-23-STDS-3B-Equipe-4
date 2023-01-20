import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "../components/CardBoxMaintenance";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";



export default function MaintenanceCurative() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="maintenance-curative-page">
            <Header page={"Curatif"} dimensionsTitre={80}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>





                <CardBoxMaintenance titre="Gamme 1" pdfimg = {"visible"} typeGamme={"curatif"} />
                <CardBoxMaintenance titre="Gamme 2" pdfimg = {"visible"} typeGamme={"curatif"}/>
                <CardBoxMaintenance titre="Gamme 3" pdfimg = {"visible"} typeGamme={"curatif"}/>
                <CardBoxMaintenance titre="Gamme 4" pdfimg = {"visible"} typeGamme={"curatif"}/>
                <br/>
                <br/>
            </IonContent>
        </IonPage>
    );
}
