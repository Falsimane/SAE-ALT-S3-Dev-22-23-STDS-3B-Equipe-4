import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import {useParams} from "react-router-dom";
import '../theme/Pdf.css';
import { MobilePDFReader } from 'react-read-pdf';
import Header from "./Header";
import Box from "@mui/material/Box";

export default function Pdf() {

    const { id } : {id: string} = useParams();

    let titre = "";
    let pdf = null;
    switch(id){
        case "notice-utilisation":
            titre = "Notice d'utilisation";
            pdf = "/STDS_notice_utilisation.pdf";
            break;
        case "manuel-service":
            titre = "Manuel de service";
            pdf = "/STDS_manuel_service.pdf";
            break;
        case "gamme-01":
            titre = "Gamme 1 - Préventif";
            pdf = "/gammes/gamme_preventive_1.pdf"
            break;
        case "gamme-02":
            titre = "Gamme 2 - Préventif";
            pdf = "/gammes/gamme_preventive_2.pdf"
            break;
        case "gamme-11":
            titre = "Gamme 1 - Curatif";
            pdf = "/gammes/gamme_curative_1.pdf"
            break;
        case "gamme-12":
            titre = "Gamme 2 - Curatif";
            pdf = "/gammes/gamme_curative_2.pdf"
            break;
        case "gamme-13":
            titre = "Gamme 3 - Curatif";
            pdf = "/gammes/gamme_curative_3.pdf"
            break;
        case "gamme-14":
            titre = "Gamme 4 - Curatif";
            pdf = "/gammes/gamme_curative_4.pdf"
            break;
        case "gamme-15":
            titre = "Gamme 5 - Curatif";
            pdf = "/gammes/gamme_curative_5.pdf"
            break;
        case "gamme-16":
            titre = "Gamme 6 - Curatif";
            pdf = "/gammes/gamme_curative_6.pdf"
            break;
    }

    return (
        <IonPage id="pdf">
            <Header page={titre} dimensionsTitre={230}/>
            <IonContent fullscreen>
                <Box sx={{height: 200}}></Box>
                <div style={{overflow:'scroll'}}>
                    <MobilePDFReader url={process.env.PUBLIC_URL + pdf}/>
                </div>
            </IonContent>
        </IonPage>
    );
}