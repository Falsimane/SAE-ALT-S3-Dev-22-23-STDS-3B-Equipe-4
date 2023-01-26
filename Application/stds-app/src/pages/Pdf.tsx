import React from "react";
import {IonContent, IonPage, IonRefresher, IonRefresherContent} from "@ionic/react";
import {useParams} from "react-router-dom";
import PdfManuelService from "../documents/STDS_manuel_service.pdf";
import PdfGammePreventive1 from "../documents/gammes/gamme_preventive_1.pdf";
import PdfGammePreventive2 from "../documents/gammes/gamme_preventive_2.pdf";
import PdfGammeCurative1 from "../documents/gammes/gamme_curative_1.pdf";
import PdfGammeCurative2 from "../documents/gammes/gamme_curative_2.pdf";
import PdfGammeCurative3 from "../documents/gammes/gamme_curative_3.pdf";
import PdfGammeCurative4 from "../documents/gammes/gamme_curative_4.pdf";
import PdfGammeCurative5 from "../documents/gammes/gamme_curative_5.pdf";
import PdfGammeCurative6 from "../documents/gammes/gamme_curative_6.pdf";
// @ts-ignore
import { MobilePDFReader } from 'react-read-pdf';

export default function Pdf() {

    const refresh = (e: CustomEvent) => {
        setTimeout(() => {
            e.detail.complete();
        }, 3000);
    };

    const { id } : {id: string} = useParams();

    let titre = "";
    let pdf = null;
    switch(id){
        case "notice-utilisation":
            titre = "Notice d'utilisation";
            //pdf = PdfNoticeUtilisation;
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
                        <div style={{overflow:'scroll',height:600}}>
                            <MobilePDFReader url="http://localhost:3000/STDS_notice_utilisation.pdf"/>
                        </div>
            </IonContent>
        </IonPage>
    );
}