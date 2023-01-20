import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import './Home.css';
import Header from "./Header";
import CardBox from "../components/CardBox";
import CardBoxPageQuantite from "../components/CardBoxPageQuantite";
import CardBoxPagePuissance from "../components/CardBoxPagePuissance";
import CardBoxPageTemperature from "../components/CardBoxPageTemperature";
import React from "react";


const Home: React.FC = () => {

  const colordotTemp = "#22B04B";
  const colordotPuiss = "#ED1C24";

  const refresh = (e: CustomEvent) => {
    setTimeout(() => {
      e.detail.complete();
    }, 3000);
  };

  return (
      <IonPage id="home-page">
        <Header page={"Accueil"} dimensionsTitre={90}/>
        <IonContent fullscreen>
          <IonRefresher slot="fixed" onIonRefresh={refresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>

          <CardBoxPageTemperature/>

          <CardBoxPageQuantite/>

          <CardBoxPagePuissance/>
          
        </IonContent>
      </IonPage>
  );
};

export default Home;
