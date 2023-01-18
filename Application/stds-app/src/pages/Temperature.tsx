import {IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";

export default function Temperature() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="temperature-page">
            <IonHeader>
                <Header page={"Température"} dimensionsTitre={130}/>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

            </IonContent>
        </IonPage>
    );
}