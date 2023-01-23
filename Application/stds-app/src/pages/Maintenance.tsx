
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";
import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "../components/CardBoxMaintenance";
import {IonContent} from "@ionic/react";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {useHistory} from "react-router";
export default function Maintenance() {
    const history = useHistory();
    const datas = useContext(STDSDatasContext);
    const diagnostique = datas.diag2 

    const openPdfDiag = () => {

        switch (diagnostique){
            case "Température élevée de la bière !" :
                history.push("/pdf/gamme-01")
                break
    
            case "Temperature idéale de la bière !" :
                break
    
            case "Capteur de température déconnecté !" :
                history.push("/pdf/gamme-03")
                break
    
            case "Capteur de température ambiante déconnecté !" :
                history.push("/pdf/gamme-04")
                break
    
            case "Wattmètre déconnecté !" :
                history.push("/pdf/gamme-05")
                break
    
            case "Le fût est bientôt vide, pensez à le à le recharger !" :
                history.push("/pdf/gamme-06")
                break

            case "Le fût est plein !" :
                history.push("/pdf/gamme-06")
                break

            case "MQTT 2 déconnecté" :
                history.push("/pdf/gamme-06")
                break


        }
    }


    return (
        <IonContent fullscreen>
            <Header page={"Maintenance"} dimensionsTitre={130}/>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 10}}>
                <Card sx={{ backgroundColor: "#E6E6E6", height: 150, width: "80%"}}>

                    <CardActionArea sx={{height: '100%'}} >
                        <CardContent sx= {{ height:"100%" , padding : 0}} onClick={openPdfDiag}> 

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

            <CardBoxMaintenance titre="Notice d'utilisation" pdfimg = {"visible"} typeGamme={""}/>
            <CardBoxMaintenance titre="Manuel de service" pdfimg = {"visible"} typeGamme={""} />
            <CardBoxMaintenance titre="Maintenance préventive" pdfimg = {"hidden"} typeGamme={""}/>
            <CardBoxMaintenance titre="Maintenance curative" pdfimg = {"hidden"} typeGamme={""}/>
            <br/>
            <br/>
        </IonContent>
    );
}
