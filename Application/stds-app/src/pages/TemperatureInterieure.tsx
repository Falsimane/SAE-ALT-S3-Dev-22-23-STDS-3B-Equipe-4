import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import BarChart from "../components/BarChart";
import InformationsEtat from "../components/InformationsEtat";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import CardBoxTemperature from "../components/CardBoxTemperature";

function TemperatureInterieure() {
    const {temp1, temp2} = React.useContext(STDSDatasContext);

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    return (
        <IonPage id="temperature-interieure">
            <Header page={
                "Température ambiante"} dimensionsTitre={205}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <BarChart measurement={'T2'}  labelX={'Heure'} labelY={'Température °C'} title={'Historique de la température'}/>

                <InformationsEtat mesure={"Température"} nombre={temp1} nombre2={temp2}/>

                <CardBoxTemperature/>
            </IonContent>
        </IonPage>
    );
}

export default TemperatureInterieure;