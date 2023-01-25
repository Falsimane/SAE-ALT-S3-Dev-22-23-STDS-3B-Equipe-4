import React from 'react';
import { IonButton } from '@ionic/react';

export default function HierButton(props: {color:string; onChange: any; selected: boolean}) {

    if (props.selected) {
            return (
            <>
                <IonButton onClick={props.onChange} shape="round" size="small" color='warning' fill="solid">
                    Hier
                </IonButton>
            </>
        ); }

    return (
        <>
            <IonButton onClick={props.onChange} shape="round" size="small" color='warning' fill="clear">
                Hier
            </IonButton>
        </>
    );
}