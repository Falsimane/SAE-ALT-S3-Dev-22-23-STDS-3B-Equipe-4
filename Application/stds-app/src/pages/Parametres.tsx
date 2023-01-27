import Box from "@mui/material/Box";
import {
    IonContent,
    IonItem,
    IonLabel,
    IonList, IonListHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTextarea, useIonAlert, useIonToast
} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import {useContext} from "react";
import {IonToggle} from "@ionic/react";
import ColorModeContext from "../utils/colormode/ColorModeContext";
import {IconButton} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ServerAddressContext from "../utils/serveraddress/ServerAddressContext";
export default function Puissance() {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    const { colorMode, toggleColorMode } = useContext(ColorModeContext)
    const [checked, setChecked] = React.useState(colorMode === 'dark');
    const [stateServerAddress, setStateServerAddress] = React.useState("");
    const [present] = useIonToast();
    const [presentAlert] = useIonAlert()
    const { serverAddress, updateServerAddress } = useContext(ServerAddressContext);

    const toggleDarkModeHandler = () => {
        toggleColorMode();
        setChecked(!checked);
    };

    const handleInputServerAddress = (e: any) => {
        setStateServerAddress(e.target.value);
    }

    const checkServerAddress = () => {
        if (stateServerAddress === "") {
            present({
                message: "Veuillez entrer une adresse",
                duration: 2000,
                position: "top",
            }).then()
            return false;
        }
        const validIpAddressRegex = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/g;
        const validHostnameRegex = /^(([a-zA-Z0-9]|[a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9])\.)*([A-Za-z0-9]|[A-Za-z0-9][A-Za-z0-9-]*[A-Za-z0-9])$/g;
        if (!validIpAddressRegex.test(stateServerAddress) && !validHostnameRegex.test(stateServerAddress)) {
            present({
                message: "Adresse IP invalide",
                duration: 2000,
                position: "top",
            }).then()
            return false;
        }
        return true;
    }

    const handleValidateServerAddress = () => {
        if (!checkServerAddress()) return;
        presentAlert({
            header: "Adresse du serveur modifiée :",
            message: stateServerAddress,
            buttons: [
                {
                    text: "Annuler",
                    role: "cancel",
                    handler: () => {
                        setStateServerAddress("")
                        present({
                            message: "Modification annulée",
                            duration: 2000,
                            position: "top",
                        }).then()
                    }
                },
                {
                    text: "Valider",
                    handler: () => {
                        updateServerAddress(stateServerAddress);
                        setTimeout(() => {
                            window.location.reload();
                        }, 2500);
                        present({
                            message: "Adresse du serveur modifiée : " + stateServerAddress,
                            duration: 2000,
                            position: "top",
                        }).then(() => {
                            setStateServerAddress("")
                        })
                    }
                },
            ]
        }).then()
    }

    return (
        <IonPage id="puissance-page">
            <Header page={"Paramètres"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <Box sx={{width: "100%", display:"flex", justifyContent:"center", alignItems:"center"}}>
                    <IonList style={{
                        maxWidth: 700,
                        width: "100%",
                    }}>
                        <IonListHeader>
                            <IonLabel style={{fontSize: 20}} >Choix du thème</IonLabel>
                        </IonListHeader>
                        <IonItem>
                            <IonLabel>Thème Sombre</IonLabel>
                            <IonToggle
                                name="darkMode"
                                onIonChange={toggleDarkModeHandler}
                                color="tertiary"
                                slot="end"
                                checked={checked}
                            />
                        </IonItem>
                        <IonListHeader>
                            <IonLabel style={{fontSize: 20}} >Paramétrage de la tireuse</IonLabel>
                        </IonListHeader>
                        <IonItem>
                            <IonLabel>Adresse du serveur :</IonLabel>
                            <IonTextarea
                                placeholder={serverAddress}
                                rows={1}
                                wrap="soft"
                                value={stateServerAddress}
                                onIonChange={handleInputServerAddress}
                            />
                            <IconButton
                                color="primary"
                                sx={{
                                    height: 40,
                                    width: 40,
                                }}
                                onClick={handleValidateServerAddress}
                            >
                                <CheckCircleOutlineIcon fontSize="large" />
                            </IconButton>
                        </IonItem>
                    </IonList>
                </Box>
            </IonContent>
        </IonPage>
    );
}
