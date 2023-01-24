import React from 'react';
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import CircleIcon from "@mui/icons-material/Circle";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Card from "@mui/material/Card";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";

export default function InformationsEtat(props: { mesure:string, nombre: number, nombre2: number}) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    let msgVert = "";
    let msgOrange = "";
    let msgRouge = "";

    let colorDot= "#22B04B";
    let texteEtat = "";

    switch (props.mesure){
        case "Température":
            msgVert = "Température ideale";
            msgOrange = "Température légèrement élevée";
            msgRouge = "Température trop élevée"

            if (props.nombre > 30 || props.nombre2 > 30){
                colorDot = "#ED1C24";
                texteEtat = msgRouge;
            } else if(props.nombre > 20 || props.nombre2 > 20){
                colorDot = "#F49229";
                texteEtat = msgOrange;
            } else {
                texteEtat = msgVert;
            }
            break;
        case "Quantité":
            msgVert = "Quantité élevée";
            msgOrange = "Quantité intermédiaire";
            msgRouge = "Quantité faible"

            if (props.nombre <= 10){
                colorDot = "#ED1C24";
                texteEtat = "Quantité faible";
            } else if(props.nombre <= 20){
                colorDot = "#F49229";
                texteEtat = "Quantité intermédiaire";
            } else {
                texteEtat = "Quantité élevée";
            }
            break;
        case "Puissance":
            msgVert = "Puissance correcte";
            msgOrange = "Puissance faible";
            msgRouge = "Puissance trop importante"

            if (props.nombre >= 70){
                colorDot = "#ED1C24";
                texteEtat = msgRouge;
            } else if(props.nombre < 0){
                colorDot = "#F49229";
                texteEtat = msgOrange;
            } else {
                texteEtat = msgVert;
            }
            break;
    }

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle sx={{textAlign: "center", fontWeight: "bold", display: "flex", justifyContent: "center"}}>
                    <InfoOutlinedIcon sx={{ color:"blue", marginRight: 1}}/>
                    <Typography sx={{fontWeight: "bold"}}>Informations</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContent sx={{}}>
                        <Box sx={{display: "flex", marginBottom: 1}}>
                            <CircleIcon sx={{ color: "#22B04B", marginRight: 2}} fontSize = "small"/>
                            <Typography sx={{fontWeight: "bold"}}>{msgVert}
                            </Typography>
                        </Box>
                        <Box sx={{display: "flex", marginBottom: 1}}><CircleIcon sx={{ color: "#F49229", marginRight: 2}} fontSize = "small"/><Typography sx={{fontWeight: "bold"}}>{msgOrange}</Typography></Box>
                        <Box sx={{display: "flex", marginBottom: 1}}><CircleIcon sx={{ color: "#ED1C24", marginRight: 2}} fontSize = "small"/><Typography sx={{fontWeight: "bold"}}>{msgRouge}</Typography></Box>
                    </DialogContent>
                </DialogContent>
            </Dialog>





        <Card sx={{ backgroundColor: "#E6E6E6", height: 40, width: "80%", marginLeft: "10%", marginTop: 5}}>
            <CardActionArea onClick={handleClickOpen} sx={{height: '100%'}}>
                <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>

                    <Typography sx={{fontWeight:"bold",paddingLeft:"4%"}}>
                        ÉTAT
                    </Typography>



                    <Divider sx = {{ color:"blue",paddingLeft:"4%"} } orientation="vertical" variant="middle" />



                    <CircleIcon sx={{ color: colorDot , marginLeft: "3%",  marginRight: "1%",  left :"30%"}} fontSize = "small"/>


                    <Typography sx={{fontWeight:"bold",paddingLeft:"3%", fontSize:12}}>
                        {texteEtat}
                    </Typography>

                    <InfoOutlinedIcon sx={{position: "absolute", right: "15%", marginLeft: "10%", color:"blue" }}/>
                </CardContent>
            </CardActionArea>
        </Card>
        </div>
    );
}