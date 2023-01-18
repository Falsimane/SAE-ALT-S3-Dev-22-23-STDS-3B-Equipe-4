import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";
import * as React from "react";
import {useHistory} from "react-router";

export default function CardBox(props: { colordot: string; title: string}){

    const history = useHistory();

    let page = () => openAccueil();

    switch (props.title){
        case "Puissance":
            page = () => openPuissance();
            break;

        case "Température":
            page = () => openTemperature();
            break;

        case "QuantiteFut":
             page = () => openQuantite();
             break;
    }

    const openAccueil = () => {
        history.push("/home");
    }

    const openPuissance = () => {
        history.push("/puissance");
    }

    const openTemperature = () => {
        history.push("/temperature");
    }

    const openQuantite = () => {
        history.push("/quantite");
    }

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
            <Box sx={{ width: "90%" }}>
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 1
                    }}
                >
                    {" "}
                    {props.title}{" "}
                </Typography>


                <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                    <CardActionArea onClick={page} sx={{height: '100%'}}>
                        <CardContent>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "flex-end",
                                    marginRight: 1,
                                    marginTop: 1
                                }}
                            >
                                <CircleIcon sx={{ color: props.colordot }} />
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    );
}