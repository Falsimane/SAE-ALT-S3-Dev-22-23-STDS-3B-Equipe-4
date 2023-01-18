import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function CardBoxMaintenance(props: { titre:string ; pdfimg: boolean}) {
    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
            <Box sx={{ width: "80%" }}>
                


                <Card sx={{ backgroundColor: "#E6E6E6", height: 120}}>
                    <CardActionArea sx={{height: '100%'}}>
                        <CardContent sx= {{ display: 'flex'}}>
                           
                            <Typography sx = {{ fontSize: 30, marginLeft: 10}}> {props.titre} </Typography>
                            
                            <ArrowForwardIosIcon fontSize ='large' sx={{position: 'absolute', right : 30}}/>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    );
}