import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import Divider from '@mui/material/Divider';
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {useContext} from "react";
import InformationsEtat from "../components/InformationsEtat";
import BarChart from "../components/BarChart";

export default function QuantiteFut() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const datas = useContext(STDSDatasContext);

    const pourcentageQuantite = datas.niveau;
    let calculPourcentage = pourcentageQuantite;

    let nombreVerre = Math.floor(6*pourcentageQuantite/100 * 4);

    let radiusLiquideQuantiteTop = 0;
    let nombreApres90 = 0;
    if(pourcentageQuantite > 90){
        nombreApres90 = 10-(100-pourcentageQuantite);
        radiusLiquideQuantiteTop += nombreApres90;
    } else if (pourcentageQuantite === 1){
        calculPourcentage = 1.1/90*100;
    }
    return (
        <IonPage id="quantitefut-page">
            
            <Header page={"Quantité Fût"} dimensionsTitre={110}/>
            
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <BarChart measurement={"niveau"} labelX={'Heure'} labelY={'Niveau (L)'} title={'Historique du niveau du fût'}/>

                <InformationsEtat mesure={"Quantité"} nombre={pourcentageQuantite}/>

                <Box>
                    <Typography sx={{paddingTop: 3, paddingBottom: 3, fontWeight: "bold", textAlign: "center", fontSize: 35}}>
                        {pourcentageQuantite/100*6} L
                    </Typography>
                </Box>

                        <Box sx={{ backgroundColor: "#E6E6E6", height: 120, width: "90%", marginLeft: "5%"}}>
                                <Box sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>

                                    <Box sx={{ display: "flex", alignItems: "end", height: 100, marginTop: 1.5, justifyContent: "center", width: "50%"}}>
                                        <Box sx={{marginBottom: 0.8, position: "absolute", backgroundColor: "#FFD335", borderTopRightRadius : radiusLiquideQuantiteTop, borderTopLeftRadius : radiusLiquideQuantiteTop, width: 57, height: 0.9*calculPourcentage}}/>
                                        <Box sx={{position: "absolute"}}>
                                            <img src={require('../images/fut-bierre.png')} alt=""/>
                                        </Box>
                                        <Typography sx={{zIndex: 1, position: "relative", bottom: 40, fontWeight: 'bold', textAlign: "center",color:"black"}}>{pourcentageQuantite}%</Typography>
                                    </Box>

                                    <Divider sx = {{ color:"blue", height: 100} } orientation="vertical" variant="middle" />

                                    <Box sx={{display:"flex", justifyContent: "center", width: "50%"}}>
                                        <Box sx={{width: 110, height: 100}}>
                                            <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                                <Box id={"pinte-bierre"} sx={{height: 30}}>
                                                    <img src={require('../images/pinte-bierre.png')} alt=""/>
                                                </Box>
                                                <Typography sx={{marginLeft: 2, fontWeight: "bold", paddingTop: 1,color:"black"}}>
                                                    x {nombreVerre/2}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                                <Box id={"verre-bierre"} sx={{height: 30}}>
                                                    <img src={require('../images/verre-bierre.png')} alt=""/>
                                                </Box>
                                                <Typography sx={{marginLeft: 2, fontWeight: "bold", paddingTop: 2, color:"black"}}>
                                                    x {nombreVerre}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </Box>

                                </Box>
                        </Box>
               
                </IonContent>
        </IonPage>
    );
}
