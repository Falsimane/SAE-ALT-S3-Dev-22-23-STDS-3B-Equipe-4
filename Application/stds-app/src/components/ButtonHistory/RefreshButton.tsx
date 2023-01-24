import React from 'react';
import { IonButton } from '@ionic/react';

export default function Refresh(props: {title: string; color:string}) {
    return (
        <>
            <IonButton onClick={() => window.location.reload()} shape="round" size="small" color={props.color} fill="clear">
                {props.title}
            </IonButton>
        </>
    );
}