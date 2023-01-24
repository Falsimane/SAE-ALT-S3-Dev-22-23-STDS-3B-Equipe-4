import React from 'react';
import { IonButton } from '@ionic/react';

export default function HierButton(props: {color:string; onChange: any}) {

    return (
        <>
            <IonButton onClick={props.onChange} shape="round" size="small" color={props.color} fill="clear">
                Hier
            </IonButton>
        </>
    );
}