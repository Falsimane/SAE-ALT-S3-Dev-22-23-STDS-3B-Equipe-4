import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from '@mui/material/Divider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";

export default function QuantiteFut() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };


    let pourcentageQuantite = 75;
    let nombreVerre = Math.floor(6*pourcentageQuantite/100 * 4);

    let colorDot= "#22B04B";
    let texteQuantite = "Quantité élevée";

    if (pourcentageQuantite <= 10){
        colorDot = "#ED1C24";
        texteQuantite = "Quantité faible";
    } else if(pourcentageQuantite <= 30){
        colorDot = "#F49229";
        texteQuantite = "Quantité intermédiaire";
    }

    let calculPourcentage = pourcentageQuantite;
    let radiusLiquideQuantiteTop = 0;
    let nombreApres90 = 0;
    if(pourcentageQuantite > 90){
        nombreApres90 = 10-(100-pourcentageQuantite);
        radiusLiquideQuantiteTop += nombreApres90;
    } else if (pourcentageQuantite === 1){
        calculPourcentage = 1.1/90;
    }
    return (
        <IonPage id="quantitefut-page">
            
            <Header page={"Quantité Fût"} dimensionsTitre={110}/>
            
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Card sx={{ backgroundColor: "#E6E6E6", height: 40, width: "80%", marginLeft: "10%", marginTop: 5}}>
                    <CardActionArea sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>

                            <Typography sx={{fontWeight:"bold",paddingLeft:"4%"}}>
                                ÉTAT
                            </Typography>



                            <Divider sx = {{ color:"blue",paddingLeft:"4%"} } orientation="vertical" variant="middle" />



                            <CircleIcon sx={{ color: colorDot , marginLeft: "3%",  marginRight: "1%",  left :"30%"}} fontSize = "small"/>


                            <Typography sx={{fontWeight:"bold",paddingLeft:"3%", fontSize:12}}>
                                {texteQuantite}
                            </Typography>

                            <InfoOutlinedIcon sx={{position: "absolute", right: "15%", marginLeft: "10%", color:"blue" }}/>
                        </CardContent>
                    </CardActionArea>
                </Card>

                        <Card sx={{ backgroundColor: "#E6E6E6", height: 120, width: "90%", marginLeft: "5%", marginTop:5}}>
                            <CardActionArea sx={{height: '100%'}}>
                                <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                                    <Box sx={{ display: "flex", alignItems: "end", height: 100, marginTop: 0.5, justifyContent: "center", width: "50%"}}>
                                        <Box sx={{marginBottom: 0.6, position: "absolute", backgroundColor: "#FFD335", borderTopRightRadius : radiusLiquideQuantiteTop, borderTopLeftRadius : radiusLiquideQuantiteTop, width: 56, height: 0.9*calculPourcentage}}/>
                                        <Box sx={{position: "absolute"}}>
                                            <img src={require('../images/fut-bierre.png')} alt=""/>
                                        </Box>
                                        <Typography sx={{zIndex: 1, position: "absolute", bottom: 44, fontWeight: 'bold', textAlign: "center"}}>{pourcentageQuantite}%</Typography>
                                    </Box>
                                    <Divider sx = {{ color:"blue"} } orientation="vertical" variant="middle" />
                                    <Box sx={{display:"flex", justifyContent: "center", width: "50%"}}>
                                        <Box sx={{width: 95, height: 100}}>
                                            <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                                <Box id={"pinte-bierre"} sx={{height: 30}}>
                                                    <img src={require('../images/pinte-bierre.png')} alt=""/>
                                                </Box>
                                                <Typography sx={{marginLeft: 2, fontWeight: "bold", paddingTop: 1}}>
                                                    x {nombreVerre/2}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                                <Box id={"verre-bierre"} sx={{height: 30}}>
                                                    <img src={require('../images/verre-bierre.png')} alt=""/>
                                                </Box>
                                                <Typography sx={{marginLeft: 2, fontWeight: "bold", paddingTop: 2}}>
                                                    x {nombreVerre}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>

               
                </IonContent>
        </IonPage>
    );
}
