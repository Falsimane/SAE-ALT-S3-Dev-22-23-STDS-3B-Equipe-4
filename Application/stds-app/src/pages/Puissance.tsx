import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {IonContent, IonHeader, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import Divider from '@mui/material/Divider';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function Puissance() {
    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };


    let valPuissance= 85;
   
    let imageVal
  
    let calculPuissance = valPuissance;
    let radiusLiquideQuantiteTop = 0;
    let nombreApres90 = 0;
    
    

    switch (true) {
        case (valPuissance < 10):
            imageVal = "min-.png"
            break;
        case (valPuissance <= 20 && valPuissance > 10):
            imageVal = "min+.png"
            break;
        case (valPuissance <= 40 && valPuissance > 20):
            imageVal = "medium-.png";
            break;
        case (valPuissance <= 60 && valPuissance > 40):
            imageVal ="medium+.png";
            break;
        case (valPuissance <= 80 && valPuissance > 60):
            imageVal = "max-.png";
            break;
        case (valPuissance > 80):
            imageVal = "max+.png";
            break;
        default:
            imageVal = "min-.png"
            break;
    }   

    return (
        <IonPage id="puissance-page">
            <IonHeader>
                <Header page={"Puissance"} dimensionsTitre={110}/>
            </IonHeader>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                    <Box sx={{ height:"20%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3}}>

                    </Box>

                    <Box sx={{ height:"7%", width: "80%", backgroundColor:"#E6E6E6",  margin:"10%", borderRadius:3, display:"flex", alignItems:"center"}}>

                        <Typography sx={{fontWeight:"bold",paddingLeft:2}}>
                            ETAT
                        </Typography>
                    


                        <Divider sx = {{ color:"blue",paddingLeft:2} } orientation="vertical" variant="middle" />

                       

                        <CircleIcon sx={{ color: "#ED1C24" , marginLeft: 2,  marginRight: 1,  left :"30%"}} fontSize = "medium"/>


                        <Typography sx={{fontWeight:"bold",paddingLeft:2, fontSize:12}}>
                            Puissance correcte
                        </Typography>

                        <InfoOutlinedIcon sx={{marginLeft: 1, color:"blue" }}/>
                        

                    </Box>

                                <Box sx={{ height:"40%", width: "80%", backgroundColor:"#E6E6E6", margin:"10%", borderRadius:3, marginTop: "15%",  display:"flex",  justifyContent:"center", alignItems:"center"}}>


                                
                                <Box sx={{display: "flex" ,height:100, width:175 ,alignItems: "center"}}>

                                    <img src={require('../images/' + imageVal)}/>
                                </Box>

                                <Box sx={{display: "flex"}}>

                                    <Typography sx={{fontWeight:"bold", fontSize:30 , height:50, width:80}}>
                                        {valPuissance} W
                                    </Typography>

                                </Box>
                        


                    </Box>

                    


               
            </IonContent>
        </IonPage>
    );
}
