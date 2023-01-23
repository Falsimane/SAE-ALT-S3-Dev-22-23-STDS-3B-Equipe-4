import Box from "@mui/material/Box";
import {
    IonContent,
    IonItem,
    IonLabel,
    IonList, IonListHeader,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTextarea
} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import {useContext} from "react";
import {IonToggle} from "@ionic/react";
import ColorModeContext from "../utils/colormode/ColorModeContext";
import {IconButton} from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
export default function Puissance() {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };
    const { colorMode, toggleColorMode } = useContext(ColorModeContext)
    const [checked, setChecked] = React.useState(colorMode === 'dark');

    const toggleDarkModeHandler = () => {
        toggleColorMode();
        setChecked(!checked);
    };

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
                            <IonLabel>Choix du thème</IonLabel>
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
                            <IonLabel>Paramétrage de la tireuse</IonLabel>
                        </IonListHeader>
                        <IonItem>
                            <IonLabel>Adresse du serveur :</IonLabel>
                            <IonTextarea placeholder="127.0.0.1" rows={1} wrap="soft"/>
                            <IconButton color="primary" sx={{
                                height: 40,
                                width: 40,
                            }} >
                                <CheckCircleOutlineIcon fontSize="large" />
                            </IconButton>
                        </IonItem>
                    </IonList>
                </Box>
            </IonContent>
        </IonPage>
    );
}
