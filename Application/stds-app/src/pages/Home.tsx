import {
  IonContent,
  IonPage,
  IonRefresher,
  IonRefresherContent,
} from '@ionic/react';
import './Home.css';
import Header from "./Header";
import CardBox from "../components/CardBox";
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";

const Home: React.FC = () => {

  const colordotTemp = "#22B04B";
  const colordotQuant = "#F49229";
  const colordotPuiss = "#ED1C24";

  let pourcentageQuantite = 75;

  let calculPourcentage = pourcentageQuantite;
  let radiusLiquideQuantiteTop = 0;
  let nombreApres90 = 0;
  if(pourcentageQuantite > 90){
    nombreApres90 = 10-(100-pourcentageQuantite);
    radiusLiquideQuantiteTop += nombreApres90;
  } else if (pourcentageQuantite == 1){
    calculPourcentage = 1.1/90;
  }

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

          <CardBox colordot={colordotTemp} title={"Temperature"} />

          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5}}>
            <Box sx={{ width: "90%"}}>
              <Typography
                  sx={{
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: 20,
                    marginBottom: 1
                  }}
              >
                Quantité fût
              </Typography>


              <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                <CardActionArea sx={{height: '100%'}}>
                  <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                    <Box sx={{marginLeft: 10, display: "flex", alignItems: "end", height: 100, marginTop: 0.5, justifyContent: "center"}}>
                      <Box sx={{marginBottom: 0.3, position: "absolute", backgroundColor: "#FFD335", borderTopRightRadius : radiusLiquideQuantiteTop, borderTopLeftRadius : radiusLiquideQuantiteTop, width: 56, height: 0.9*calculPourcentage}}/>
                      <Box sx={{position: "absolute"}}>
                        <img src={require('../images/fut-bierre.png')}/>
                      </Box>
                    </Box>
                    <CircleIcon sx={{ color: colordotQuant, position: "absolute", right: 30}} />
                  </CardContent>
                </CardActionArea>
              </Card>

            </Box>
          </Box>

          <CardBox colordot={colordotPuiss} title={"Puissance"} />
        </IonContent>
      </IonPage>
  );
};

export default Home;
