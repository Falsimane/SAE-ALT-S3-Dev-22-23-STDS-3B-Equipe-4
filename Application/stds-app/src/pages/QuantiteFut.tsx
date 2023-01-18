import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";

export default function QuantiteFut() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="quantitefut-page">
            
            <Header page={"Quantité Fût"} dimensionsTitre={130}/>
            
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>



               
            </IonContent>
        </IonPage>
    );
}
