import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";
import {useContext, useEffect, useState} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {Grow, useTheme} from "@mui/material";
import {checkNiveau} from "../utils/errors/checkErrors";
import ErrorAlert from "./ErrorAlert";
import {getErrorColor} from "../utils/errors/ErrorUtils";

export default function CardBoxTemperature(){
    const [showImage, setShowImage] = useState(false)
    const history = useHistory();
    const theme = useTheme();
    const datas = useContext(STDSDatasContext);
    const qteError = checkNiveau(datas.niveau).niveau
    const colorDot = getErrorColor(qteError.errorLevel, theme)
    const pourcentageQuantite = datas.niveau;
    let calculPourcentage = pourcentageQuantite;
    let nombreVerre = Math.floor(6*pourcentageQuantite/100 * 4);

    let radiusLiquideQuantiteTop = 0;
    let nombreApres90 = 0;
    if(pourcentageQuantite > 90){
        nombreApres90 = 10-(100-pourcentageQuantite);
        radiusLiquideQuantiteTop += nombreApres90;
    } else if (pourcentageQuantite === 1){
        calculPourcentage = 1.1/90*100;
    }

    const openPage = () => {
        history.push("/quantite");
    }

    useEffect(() => {
        setShowImage(true)
    }, [])

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5}}>
            <Box sx={{ width: "90%"}}>
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 1
                    }}
                >
                    Quantité fût
                </Typography>


                <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: 10, display: "flex", alignItems: "end", height: 100, marginTop: 0.5, justifyContent: "center"}}>
                                <Box sx={{marginBottom: 0.3, position: "absolute", backgroundColor: "#FFD335", borderTopRightRadius : radiusLiquideQuantiteTop, borderTopLeftRadius : radiusLiquideQuantiteTop, width: 57, height: 0.9*calculPourcentage}}/>
                                <Box sx={{position: "absolute"}}>
                                    <Grow in={showImage} timeout={1000} style={{ transformOrigin: '0% 0%' }}>
                                    <img src={require('../images/fut-bierre.png')} alt=""/>
                                    </Grow>
                                </Box>
                                <Grow in={showImage} timeout={1000} style={{ transformOrigin: '0% 0%' }}>
                                <Typography sx={{zIndex: 1, position: "absolute", bottom: 44, fontWeight: 'bold', textAlign: "center"}}>{pourcentageQuantite}%</Typography>
                                </Grow>
                                </Box>
                            <Box sx={{marginLeft: "22%", width: 80, height: 100}}>
                                <Grow in={showImage} timeout={1000} style={{ transformOrigin: '0% 0%' }}>
                                <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                    <Box id={"pinte-bierre"} sx={{height: 30}}>
                                            <img src={require('../images/pinte-bierre.png')} alt=""/>
                                    </Box>
                                    <Typography sx={{marginLeft: 1, fontWeight: "bold"}}>
                                        x {nombreVerre/2}
                                    </Typography>
                                </Box>
                                </Grow>
                                <Grow in={showImage} timeout={1000} style={{ transformOrigin: '0% 0%' }}>
                                <Box sx={{ width: "100%", height: "50%", display: "flex", alignItems:"center", justifyContent:"left"}}>
                                    <Box id={"verre-bierre"} sx={{height: 30}}>
                                        <img src={require('../images/verre-bierre.png')} alt=""/>
                                    </Box>
                                    <Typography sx={{marginLeft: 1, fontWeight: "bold"}}>
                                        x {nombreVerre}
                                    </Typography>
                                </Box>
                                </Grow>

                            </Box>
                            <CircleIcon sx={{ color: colorDot, position: "absolute", right: 30}} />
                        </CardContent>
                    </CardActionArea>
                </Card>

                <ErrorAlert error={qteError} />

            </Box>
        </Box>
    );
}