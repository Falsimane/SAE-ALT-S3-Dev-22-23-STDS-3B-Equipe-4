import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import InformationsEtat from "../components/InformationsEtat";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";

export default function Puissance() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    

    return (
        <IonPage id="puissance-page">
                <Header page={"Paramètres"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <Box sx={{ display: "flex" ,justifyContent: "center"}}>
                    <Card sx={{width:"80%",height:50, justifyItems:"center"}}>
                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 20,
                            position: "relative",
                            jusitifyContent:"center"
                            }}>
                            Thème Sombre
                        </Typography>
                    </Card>
                </Box>
            </IonContent>
        </IonPage>
    );
}
