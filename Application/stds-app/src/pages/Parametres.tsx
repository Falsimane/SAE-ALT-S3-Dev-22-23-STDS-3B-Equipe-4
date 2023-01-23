import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import * as React from "react";
import {useContext} from "react";
import {IonToggle} from "@ionic/react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ColorModeContext from "../utils/colormode/ColorModeContext";
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

    const portList = [
        { label: '8080'},{ label: '8086'},];


    return (
        <IonPage id="puissance-page">
            <Header page={"Paramètres"} dimensionsTitre={110}/>
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>

                <Box sx={{display: "flex", justifyContent: "center",}}>



                    <Card sx={{width:"80%",height:50,display:"flex", alignItems:"center", marginTop: 2}}>


                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 20,
                            position: "relative",
                            jusitifyContent:"center",
                            marginLeft:'2%'
                        }}>
                            Thème Sombre
                        </Typography>

                        <IonToggle
                            slot="end"
                            name="darkMode"
                            onIonChange={toggleDarkModeHandler}
                            color="medium"
                            checked={checked}
                        />
                    </Card>

                </Box>



                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    position: "relative",
                    jusitifyContent:"center",
                    marginleft: 2,
                    marginTop: 4
                }}>

                    Choix du serveur :

                </Typography>

                <Box sx={{display: "flex", justifyContent:'center'}}>



                    <Card sx={{width:"90%",height:50,display:"flex", alignItems:"center", marginTop: 2}}>


                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 15,
                            position: "relative",
                            jusitifyContent:"center",
                            marginLeft:'2%',
                            marginRight:'4%'
                        }}>

                            IP/Nom de domaine :

                        </Typography>

                        <TextField id="DomaineName" label="Domaine" variant="standard" />



                    </Card>

                </Box>

               

            </IonContent>
        </IonPage>
    );
}
