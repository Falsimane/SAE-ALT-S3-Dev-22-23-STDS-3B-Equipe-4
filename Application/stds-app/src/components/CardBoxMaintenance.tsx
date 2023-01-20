import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import {useHistory} from "react-router";
import pdfNoticeUtilisation from "../documents/STDS_notice_utilisation.pdf";
import pdfManuelService from "../documents/STDS_manuel_service.pdf";
import gammePreventive1 from "../documents/gammes/gamme_preventive_1.pdf";
import gammePreventive2 from "../documents/gammes/gamme_preventive_2.pdf";
import gammeCurative1 from "../documents/gammes/gamme_curative_1.pdf";
import gammeCurative2 from "../documents/gammes/gamme_curative_2.pdf";
import gammeCurative3 from "../documents/gammes/gamme_curative_3.pdf";
import gammeCurative4 from "../documents/gammes/gamme_curative_4.pdf";
import gammeCurative5 from "../documents/gammes/gamme_curative_5.pdf";
import gammeCurative6 from "../documents/gammes/gamme_curative_6.pdf";


export default function CardBoxMaintenance(props: { titre:string ; pdfimg: string, typeGamme:string}) {

    const history = useHistory();
    let marginbot = 4;

    if(props.typeGamme != ""){
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
                if(props.typeGamme === "preventif"){
                    window.open(gammePreventive1);
                }
                break;

            case "Gamme 2":
                if(props.typeGamme === "preventif"){
                    window.open(gammePreventive2);
                }
                break;

            case "Gamme 3":
                if(props.typeGamme === "preventif"){
                    window.open(gammePreventive2);
                }
                break;

            case "Gamme 4":
                if(props.typeGamme === "preventif"){
                    window.open(gammePreventive2);
                }
                break;
            case "Gamme 5":
                if(props.typeGamme === "preventif"){
                     window.open(gammePreventive2);
                }
                break;

            case "Gamme 6":
                if(props.typeGamme === "preventif"){
                    window.open(gammePreventive2);
                }
                break;
            case "Gamme 1":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative1);
                }
                break;
    
            case "Gamme 2":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative2);
                }
                break;

            case "Gamme 3":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative3);
                }
                break;
            

            case "Gamme 4":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative4);
                }
                break;
            
            case "Gamme 5":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative5);
                    }
                    break;
                
    
            case "Gamme 6":
                if(props.typeGamme === "curative"){
                    window.open(gammeCurative6);
                    }
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