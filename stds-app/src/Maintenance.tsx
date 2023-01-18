import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CircleIcon from "@mui/icons-material/Circle";
import * as React from "react";
import Header from "./Header";
import CardBoxMaintenance from "./CardBoxMaintenance";

export default function Maintenance() {
    return (
        <div className="Maintenance">
            <Header page={"Maintenance"} dimensionsTitre={130}/>


            <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 , marginBottom: 20}}>
                    <Card sx={{ backgroundColor: "#E6E6E6", height: 200, width: "80%"}}>
                        
                        <CardActionArea sx={{height: '100%'}}>
                            <CardContent sx= {{ display: 'flex', alignItems : "center"}}>

                                <CircleIcon sx={{ color: "#ED1C24" }} fontSize = "large"/>
                                <Typography sx = {{ fontSize: 30, marginLeft: 10}}> Autodiagnostic </Typography>

                                <Box sx={{backgroundColor: "#CFCFCE", borderRadius: 2, width: 250 , position: "absolute", right: 100, padding: 2, textAlign: "center"}}>

                                    <Typography sx={{fontSize: 25,color:"#ED1C24" , fontWeight: "bold"}}>
                                        Deconnexion réseau
                                    </Typography>
                                    
                                </Box>
                                

                            
                            </CardContent>
                        </CardActionArea>
                    </Card>
            </Box>






            <CardBoxMaintenance titre="Notice d'utilisation" pdfimg = {true} /> 
            <CardBoxMaintenance titre="Manuel de service" pdfimg = {true} /> 
            <CardBoxMaintenance titre="Maintenance préventive" pdfimg = {false}/>
            <CardBoxMaintenance titre="Maintenance curative" pdfimg = {false}/> 

            
        </div>
    );
}
