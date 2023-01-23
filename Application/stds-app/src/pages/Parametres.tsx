import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {
    IonButton,
    IonContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage,
    IonRefresher,
    IonRefresherContent,
    IonTextarea
} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import {useContext} from "react";
import {IonToggle} from "@ionic/react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ColorModeContext from "../utils/colormode/ColorModeContext";
import {Button, Grid} from "@mui/material";
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
                        <IonItem>
                            <IonLabel>Thème Sombre</IonLabel>
                            <IonToggle
                                slot="end"
                                name="darkMode"
                                onIonChange={toggleDarkModeHandler}
                                color="tertiary"
                                checked={checked}
                                style={{
                                    width: 60,
                                    m: 'auto',
                                }}
                            />
                        </IonItem>
                        <IonItem>
                            <IonLabel>Adresse du serveur :</IonLabel>
                            <IonTextarea placeholder="127.0.0.1" rows={1} wrap="soft" style={{
                                height: 40,
                                m: 'auto',
                            }}/>
                            <IonButton slot="end" color="tertiary" size="default" style={{
                                height: 35,
                                width: 60,
                                m: 'auto',
                            }}>Valider</IonButton>
                        </IonItem>
                    </IonList>
                </Box>
            </IonContent>
        </IonPage>
    );
}
