import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import CardBoxTemperature from "../components/CardBoxTemperature";
import BarChart from "../components/BarChart";
import InformationsEtat from "../components/InformationsEtat";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";

export default function TemperatureInterieure() {
    const {temp1, temp2} = React.useContext(STDSDatasContext);

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="temperature-page">
            <Header page={"G" +
                "TempératureIntérieure"} dimensionsTitre={130}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <BarChart measurement={'T2'}  labelX={'Heure'} labelY={'Température °C'} title={'Historique de la température'}/>

                <InformationsEtat mesure={"Température"} nombre={temp1} nombre2={temp2}/>

                <CardBoxTemperature title={"Intérieure"}/>
                <CardBoxTemperature title={"Extérieure"}/>

            </IonContent>
        </IonPage>
    );
}