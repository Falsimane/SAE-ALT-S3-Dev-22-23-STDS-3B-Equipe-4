import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {checkCO2, checkNiveau, checkPuissance, checkTemp} from "../utils/errors/checkErrors";
import Header from "./Header";
import {IonContent, IonPage} from "@ionic/react";
import * as React from "react";
import {Box, Typography} from "@mui/material";
import {CompleteAlert} from "../components/Alert";
import {ErrorFormat} from "../utils/errors/ErrorUtils";
import {defaultDataValues} from "../utils/mqtt/STDSDatas";

const Autodiagnostic = () => {
    const datas = useContext(STDSDatasContext);
    const tempErrors = checkTemp(datas.temp1, datas.temp2);
    const qteErrors = checkNiveau(datas.niveau).niveau;
    const puissanceErrors = checkPuissance(datas.puissance).puissance;
    const co2Errors = checkCO2(datas.co2).co2;
    const checkMQTT = datas.diag2 === "MQTT 2 déconnecté" || JSON.stringify(datas) === JSON.stringify(defaultDataValues);
    const diagErrors: ErrorFormat = {
        errorLevel: checkMQTT ? 2 : 0,
        message: checkMQTT ? "MQTT 2 déconnecté" : "MQTT Connecté",
        pdf: "",
    }

    return (
        <IonPage id="puissance-page">
            <Header page={"Autodiagnostic"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <Box sx={{width: '90%', margin: 'auto'}}>
                    <Typography sx={{textAlign: "left",fontWeight: "bold",fontSize: 20,marginBottom: 1}}>
                        Connexion réseau (MQTT)
                    </Typography>
                    <CompleteAlert error={diagErrors} />
                    <br/>
                    {checkMQTT ? null :
                        <><Typography sx={{textAlign: "left", fontWeight: "bold", fontSize: 20, marginBottom: 1}}>
                            Température du fût
                        </Typography><CompleteAlert error={tempErrors.temp2}/><br/><Typography
                            sx={{textAlign: "left", fontWeight: "bold", fontSize: 20, marginBottom: 1}}>
                            Température ambiante
                        </Typography><CompleteAlert error={tempErrors.temp1}/><br/><Typography
                            sx={{textAlign: "left", fontWeight: "bold", fontSize: 20, marginBottom: 1}}>
                            Quantité de bière
                        </Typography><CompleteAlert error={qteErrors}/><br/><Typography
                            sx={{textAlign: "left", fontWeight: "bold", fontSize: 20, marginBottom: 1}}>
                            Puissance
                        </Typography><CompleteAlert error={puissanceErrors}/><br/><Typography
                            sx={{textAlign: "left", fontWeight: "bold", fontSize: 20, marginBottom: 1}}>
                            CO2
                        </Typography><CompleteAlert error={co2Errors}/></>
                    }
                </Box>
            </IonContent>
        </IonPage>
    )
}

export default Autodiagnostic