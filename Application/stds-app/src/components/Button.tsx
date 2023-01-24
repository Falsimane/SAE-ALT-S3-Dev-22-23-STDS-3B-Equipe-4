import React from 'react';
import { IonButton } from '@ionic/react';
import BarChart from "./BarChart";

function Refresh() {
    return (
        <>
            <IonButton onClick={() => window.location.reload()} shape="round" size="small" color="dark">Rafraîchir</IonButton>
        </>
    );
}
export default Refresh;