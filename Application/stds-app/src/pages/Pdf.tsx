import React, { useState } from "react";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {Button} from "@mui/material";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import Header from "./Header";
import {useParams} from "react-router-dom";
import PdfNoticeUtilisation from "../documents/STDS_notice_utilisation.pdf";
import PdfManuelService from "../documents/STDS_manuel_service.pdf";
import PdfGammePreventive1 from "../documents/gammes/gamme_preventive_1.pdf";
import PdfGammePreventive2 from "../documents/gammes/gamme_preventive_2.pdf";
import PdfGammeCurative1 from "../documents/gammes/gamme_curative_1.pdf";
import PdfGammeCurative2 from "../documents/gammes/gamme_curative_2.pdf";
import PdfGammeCurative3 from "../documents/gammes/gamme_curative_3.pdf";
import PdfGammeCurative4 from "../documents/gammes/gamme_curative_4.pdf";
import PdfGammeCurative5 from "../documents/gammes/gamme_curative_5.pdf";
import PdfGammeCurative6 from "../documents/gammes/gamme_curative_6.pdf";
import '../theme/Pdf.css';
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

export default function Pdf() {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const { id } : {id: string} = useParams();
    const [numPages, setNumPages] = useState(1);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages } : {numPages:any}) {
        setNumPages(numPages);
    }

    const openPagePrec = () =>
        setPageNumber(pageNumber - 1 <= 1 ? 1 : pageNumber - 1);

    const openPageSuiv = () =>
        setPageNumber(
            pageNumber + 1 >= numPages ? numPages : pageNumber + 1,
        );

    let titre = "";
    let pdf = null;
    switch(id){
        case "notice-utilisation":
            titre = "Notice d'utilisation";
            pdf = PdfNoticeUtilisation;
            break;
        case "manuel-service":
            titre = "Manuel de service";
            pdf = PdfManuelService;
            break;
        case "gamme-01":
            titre = "Gamme 1 - Préventif";
            pdf = PdfGammePreventive1;
            break;
        case "gamme-02":
            titre = "Gamme 2 - Préventif";
            pdf = PdfGammePreventive2;
            break;
        case "gamme-11":
            titre = "Gamme 1 - Curatif";
            pdf = PdfGammeCurative1;
            break;
        case "gamme-12":
            titre = "Gamme 2 - Curatif";
            pdf = PdfGammeCurative2;
            break;
        case "gamme-13":
            titre = "Gamme 3 - Curatif";
            pdf = PdfGammeCurative3;
            break;
        case "gamme-14":
            titre = "Gamme 4 - Curatif";
            pdf = PdfGammeCurative4;
            break;
        case "gamme-15":
            titre = "Gamme 5 - Curatif";
            pdf = PdfGammeCurative5;
            break;
        case "gamme-16":
            titre = "Gamme 6 - Curatif";
            pdf = PdfGammeCurative6;
            break;
    }

    return (
        <IonPage id="pdf">
            <IonContent fullscreen>
                <IonRefresher slot="fixed" onIonRefresh={refresh}>
                    <IonRefresherContent></IonRefresherContent>
                </IonRefresher>
                <Header page={titre} dimensionsTitre={200}/>
                <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 3}}>
                    <Box>
                        <Box sx={{display: "flex", alignItems: "center", textAlign: "center", marginTop: 5, marginBottom: 5}}>
                            <Button onClick={openPagePrec} disabled={pageNumber <= 1} sx={{marginLeft: 3, backgroundColor: "rgba(0,0,0,0.05)", width: "100%", fontWeight: "bold"}}>Précédent</Button>
                            <Typography sx={{width: "100%", fontWeight: "bold"}}> {pageNumber} / {numPages}</Typography>
                            <Button onClick={openPageSuiv} disabled={pageNumber >= numPages} sx={{backgroundColor: "rgba(0,0,0,0.05)", marginRight: 3, width: "100%", fontWeight: "bold"}}>Suivant</Button>
                        </Box>
                        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess} sx={{width: "20%"}}>
                            <Page pageNumber={pageNumber}/>
                        </Document>
                    </Box>
            </Box>
            </IonContent>
        </IonPage>
    );
}