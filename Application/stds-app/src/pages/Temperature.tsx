import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import CardBoxTemperature from "../components/CardBoxTemperature";
import BarChart from "../components/BarChart";
import InformationsEtat from "../components/InformationsEtat";

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

                <BarChart measurement={'T1'}  labelX={'Heure'} labelY={'Température °C'} title={'Historique de la température'}/>

                <InformationsEtat mesure={"Température"} nombre={0} nombre2={0}/>

                <CardBoxTemperature title={"Intérieure"}/>
                <CardBoxTemperature title={"Extérieure"}/>

            </IonContent>
        </IonPage>
    );
}