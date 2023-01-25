import React from 'react';
import { IonButton } from '@ionic/react';

export default function HierButton(props: { onChange: any; selected: boolean}) {

    if (props.selected) {
        return (
            <>
                <IonButton onClick={props.onChange} shape="round" size="small" color='warning' fill="solid">
                    Aujourd'hui
                </IonButton>
            </>
        ); }

    return (
        <>
            <IonButton onClick={props.onChange} shape="round" size="small" color='warning' fill="clear">
                Aujourd'hui
            </IonButton>
        </>
    );
}