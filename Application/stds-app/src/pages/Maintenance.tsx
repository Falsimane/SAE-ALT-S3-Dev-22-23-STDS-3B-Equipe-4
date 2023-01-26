
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
import {useTheme} from "@mui/material";
import {defaultDataValues} from "../utils/mqtt/STDSDatas";
export default function Maintenance() {
    const history = useHistory();
    const datas = useContext(STDSDatasContext);
    const diagnostic = datas.diag2
    const theme = useTheme();
    const checkMQTT = datas.diag2 === "MQTT 2 déconnecté" || JSON.stringify(datas) === JSON.stringify(defaultDataValues);

    const openPdfDiag = () => {
        history.push("/autodiagnostic");
    }

    const color = checkMQTT ? theme.palette.error.main : diagnostic === "" ?
        theme.palette.success.light : theme.palette.warning.light;

    return (
        <IonContent fullscreen>
            <Header page={"Maintenance"} dimensionsTitre={130}/>
            <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 10}}>
                <Card sx={{ backgroundColor: "#E6E6E6", height: 150, width: "80%"}}>

                    <CardActionArea sx={{height: '100%'}} onClick={openPdfDiag} >
                        <CardContent sx= {{ height:"100%" , padding : 0}} >

                            <Box sx={{height: "50%", display:"flex", alignItems:"center"}}>

                                <CircleIcon sx={{ color: color, margin : 2 }} fontSize = "medium"/>
                                <Typography sx = {{ fontSize: 18, fontWeight:"bold"}}> Autodiagnostic </Typography>

                            </Box>

                            <Box sx={{height: "50%", display:"flex", alignItems:"center", justifyContent:"center"}}>

                                <Box sx={{backgroundColor: "#CFCFCE", borderRadius: 2 , textAlign: "center",display:"flex", alignItems:"center", padding : 2, marginBottom: 2}}>

                                    <Typography color={color} sx={{fontSize: 18, fontWeight: "bold", textAlign:"center", width:"100%"}}>
                                        {
                                            checkMQTT ? "Déconnexion Réseau" :
                                                diagnostic === "" ? "Pas de problème détecté" :
                                                    "Problème(s) détecté(s)"
                                        }
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
