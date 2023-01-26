import React from "react";
import {IonContent, IonPage} from "@ionic/react";
import {useParams} from "react-router-dom";
import { MobilePDFReader } from 'react-read-pdf';

export default function Pdf() {

    const { id } : {id: string} = useParams();

    let pdf = null;
    switch(id){
        case "notice-utilisation":
            pdf = "/STDS_notice_utilisation.pdf";
            break;
        case "manuel-service":
            pdf = "/STDS_manuel_service.pdf";
            break;
        case "gamme-01":
            pdf = "/gammes/gamme_preventive_1.pdf"
            break;
        case "gamme-02":
            pdf = "/gammes/gamme_preventive_2.pdf"
            break;
        case "gamme-11":
            pdf = "/gammes/gamme_curative_1.pdf"
            break;
        case "gamme-12":
            pdf = "/gammes/gamme_curative_2.pdf"
            break;
        case "gamme-13":
            pdf = "/gammes/gamme_curative_3.pdf"
            break;
        case "gamme-14":
            pdf = "/gammes/gamme_curative_4.pdf"
            break;
        case "gamme-15":
            pdf = "/gammes/gamme_curative_5.pdf"
            break;
        case "gamme-16":
            pdf = "/gammes/gamme_curative_6.pdf"
            break;
    }

    return (
        <IonPage id="pdf">
            <IonContent fullscreen>
                <div style={{overflow:'scroll',height:600}}>
                    <MobilePDFReader url={process.env.PUBLIC_URL + pdf}/>
                </div>
            </IonContent>
        </IonPage>
    );
}