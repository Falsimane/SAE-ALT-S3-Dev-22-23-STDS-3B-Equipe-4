import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import pdfNoticeUtilisation from "../documents/STDS_notice_utilisation.pdf";
import {useHistory} from "react-router";
import pdfManuelService from "../documents/STDS_manuel_service.pdf";


export default function CardBoxMaintenance(props: { titre:string ; pdfimg: string, isGamme:boolean}) {

    const history = useHistory();
    let marginbot = 4;

    if(props.isGamme){
        marginbot = 1;
    }

    const openPdfNotice = () => {
        switch (props.titre){
            case "Notice d'utilisation" :
                window.open(pdfNoticeUtilisation);
                break;

            case "Manuel de service" :
                window.open(pdfManuelService);
                break;

            case "Maintenance préventive" :
                    history.push("/maintenance-preventive");
                break;

            case "Maintenance curative" :
                history.push("/maintenance-curative");
                break;

            case "Gamme 1":
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