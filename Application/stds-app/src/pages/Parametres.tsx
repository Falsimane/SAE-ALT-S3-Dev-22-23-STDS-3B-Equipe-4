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
                            color="warning"
                            checked={checked}
                        />
                    </Card>

                </Box>



                <Typography sx={{
                    fontWeight: "bold",
                    fontSize: 20,
                    position: "relative",
                    jusitifyContent:"center",
                    marginTop:4
                }}>

                    Choix du serveur :

                </Typography>

                <Box sx={{display: "flex", justifyContent:'center'}}>




                    <Card sx={{width:"80%",height:50,display:"flex", alignItems:"center", marginTop: 2}}>


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

                        <TextField id="standard-basic" label="Standard" variant="standard" />



                    </Card>

                </Box>

                <Box sx={{display: "flex", justifyContent:'center'}}>




                    <Card sx={{width:"60%",height:70,display:"flex", alignItems:"center", marginTop: 2}}>


                        <Typography sx={{
                            fontWeight: "bold",
                            fontSize: 15,
                            jusitifyContent:"center",
                            marginLeft:'2%',
                            marginRight:'%'
                        }}>

                            Port :

                        </Typography>

                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={portList}
                            sx={{ width: 200, height: 50 ,marginLeft:'15%'}}
                            renderInput={(params) => <TextField {...params} label="Port" sx={{ lineHeight:0}}/>}/>




                    </Card>

                </Box>

            </IonContent>
        </IonPage>
    );
}
