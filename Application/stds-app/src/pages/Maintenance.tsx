
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";
import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "../components/CardBoxMaintenance";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";



export default function Maintenance() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    return (
        <IonPage id="maintenance-page">
            <Header page={"Maintenance"} dimensionsTitre={130}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 10}}>
                    <Card sx={{ backgroundColor: "#E6E6E6", height: 150, width: "80%"}}>

                        <CardActionArea sx={{height: '100%'}}>
                            <CardContent sx= {{ height:"100%" , padding : 0}}>

                                <Box sx={{height: "50%", display:"flex", alignItems:"center"}}>

                                    <CircleIcon sx={{ color: "#ED1C24", margin : 2 }} fontSize = "medium"/>
                                    <Typography sx = {{ fontSize: 18, fontWeight:"bold"}}> Autodiagnostic </Typography>

                                </Box>

                                <Box sx={{height: "50%", display:"flex", alignItems:"center", justifyContent:"center"}}>

                                    <Box sx={{backgroundColor: "#CFCFCE", borderRadius: 2 , textAlign: "center",display:"flex", alignItems:"center", padding : 2, marginBottom: 2}}>

                                        <Typography sx={{fontSize: 18,color:"#ED1C24" , fontWeight: "bold", textAlign:"center", width:"100%"}}>
                                            Deconnexion réseau
                                        </Typography>

                                    </Box>

                                </Box>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>






                <CardBoxMaintenance titre="Notice d'utilisation" pdfimg = {"visible"} isGamme={false}/>
                <CardBoxMaintenance titre="Manuel de service" pdfimg = {"visible"} isGamme={false} />
                <CardBoxMaintenance titre="Maintenance préventive" pdfimg = {"hidden"} isGamme={false}/>
                <CardBoxMaintenance titre="Maintenance curative" pdfimg = {"hidden"} isGamme={false}/>
                <br/>
                <br/>
            </IonContent>
        </IonPage>
    );
}
