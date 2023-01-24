import React from 'react';
import { IonButton } from '@ionic/react';

export default function Switch(props: {title: string; color:string}) {
    return (
        <>
            <IonButton shape="round" size="small" color={props.color} fill="outline">
                {props.title}
            </IonButton>
        </>
    );
}