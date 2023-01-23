import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {useHistory} from "react-router";


export default function CardBoxMaintenance(props: { titre:string ; pdfimg: string, typeGamme:string}) {

    const history = useHistory();
    let marginbot = 4;

    if(props.typeGamme !== ""){
        marginbot = 1;
    }

    const openPdfNotice = () => {
        switch (props.titre){
            case "Maintenance préventive" :
                    history.push("/maintenance-preventive");
                break;

            case "Maintenance curative" :
                history.push("/maintenance-curative");
                break;

            case "Notice d'utilisation" :
                fetch('SamplePDF.pdf').then(response => {
                    response.blob().then(blob => {
                        // Creating new object of PDF file
                        const fileURL = window.URL.createObjectURL(blob);
                        // Setting various property values
                        let alink = document.createElement('a');
                        alink.href = fileURL;
                        alink.download = 'SamplePDF.pdf';
                        alink.click();
                    })
                })
                break;

            case "Manuel de service" :
                history.push("/pdf/manuel-service")
                break;

            case "Gamme 1":
                if(props.typeGamme === "preventif"){
                    history.push("/pdf/gamme-01")
                }
                if(props.typeGamme === "curatif"){
                    history.push("/pdf/gamme-11")
                }
                break;

            case "Gamme 2":
                if(props.typeGamme === "preventif"){
                    history.push("/pdf/gamme-02")
                }
                if(props.typeGamme === "curatif"){
                    history.push("/pdf/gamme-12")
                }
                break;

            case "Gamme 3":
                history.push("/pdf/gamme-13")
                break;
            

            case "Gamme 4":
                history.push("/pdf/gamme-14")
                break;
            
            case "Gamme 5":
                history.push("/pdf/gamme-15")
                break;

            case "Gamme 6":
                history.push("/pdf/gamme-16")
                break;

        }
    }
    

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: marginbot }}>
            <Box sx={{ width: "80%" }}>

                <Card sx={{ backgroundColor: "#E6E6E6", height: 80}}>
                    <CardActionArea sx={{height: '100%'}} onClick={openPdfNotice}>
                        <CardContent sx= {{ display: 'flex'}}>
                           
                            <Typography sx = {{ fontSize: 18, marginLeft: 1, fontWeight:"bold"}}> {props.titre} </Typography>

                            <PictureAsPdfIcon sx= {{position:"relative", left : 20, visibility:props.pdfimg }} />
                            
                            <ArrowForwardIosIcon fontSize ='medium' sx={{position: 'absolute', right : 10}}/>
                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    );
}