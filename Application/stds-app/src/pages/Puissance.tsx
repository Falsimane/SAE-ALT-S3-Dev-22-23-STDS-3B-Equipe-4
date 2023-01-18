import {
    IonContent,
    IonHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
  } from '@ionic/react';
  import './Home.css';
  import Header from "./Header";
  import CardBox from "../components/CardBox";
  import React from "react";
  
  const Home: React.FC = () => {
  

  
    const refresh = (e: CustomEvent) => {
      setTimeout(() => {
        e.detail.complete();
      }, 3000);
    };
  
    return (
        <IonPage id="home-page">
          <IonHeader>
            <Header page={"Accueil"} dimensionsTitre={90}/>
          </IonHeader>
          <IonContent fullscreen>
            <IonRefresher slot="fixed" onIonRefresh={refresh}>
              <IonRefresherContent></IonRefresherContent>
            </IonRefresher>
  
          </IonContent>
        </IonPage>
    );
  };
  
  export default Home;