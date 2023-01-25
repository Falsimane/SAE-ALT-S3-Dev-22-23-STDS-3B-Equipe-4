import React from 'react';
import { IonButton } from '@ionic/react';

export default function TodayButton(props: {color:string; onChange: any; selected: boolean}) {

    if (props.selected) {
        return (
            <>
                <IonButton onClick={props.onChange} shape="round" size="small" color={props.color} fill="solid">
                    Aujourd'hui
                </IonButton>
            </>
        );
    }

    return (
        <>
            <IonButton onClick={props.onChange} shape="round" size="small" color={props.color} fill="default">
                Aujourd'hui
            </IonButton>
        </>
    );
}