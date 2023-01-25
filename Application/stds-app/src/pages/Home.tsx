import {
    IonContent,
} from '@ionic/react';
import './Home.css';
import Header from "./Header";
import CardBoxPageQuantite from "../components/CardBoxPageQuantite";
import CardBoxPagePuissance from "../components/CardBoxPagePuissance";
import CardBoxPageTemperature from "../components/CardBoxPageTemperature";
import React from "react";
import CardBoxPageCO2 from '../components/CardBoxPageCO2';


const Home: React.FC = () => {

    return (
        <IonContent fullscreen>
            <Header page={"Accueil"} dimensionsTitre={90}/>

            <CardBoxPageTemperature/>

            <CardBoxPageQuantite/>

            <CardBoxPagePuissance/>

            <CardBoxPageCO2/>
            <br/>
            <br/>
        </IonContent>
    );
};

export default Home;
