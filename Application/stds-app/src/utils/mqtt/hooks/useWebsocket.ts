import React, {useEffect} from "react";
import ServerAddressContext from "../../serveraddress/ServerAddressContext";
import {useIonToast} from "@ionic/react";

const toastError = (present: any) => {
    present({
        header: 'Impossible de se connecter au serveur',
        message: 'Vérifiez que l\'adresse du serveur est correcte',
        duration: 3000,
        color: 'danger',
        position: 'top'
    }).then();
}

const toastSuccess = (present: any) => {
    present({
        header: 'Connexion au serveur établie',
        message: 'Vous pouvez maintenant utiliser l\'application',
        duration: 3000,
        color: 'success',
        position: 'top'
    }).then();
}

const useWebsocket = <T>(path: string, defaultValue: T) => {
    const [val, setVal] = React.useState(defaultValue);
    const [isConnected, setIsConnected] = React.useState(false);
    const {serverAddress} = React.useContext(ServerAddressContext);
    const [present] = useIonToast();

    useEffect(() => {
        if (isConnected) {
            return;
        }
        try {
            const websocket = new WebSocket('ws://' + serverAddress + ':8080/ws/' + path);
            websocket.onopen = () => {
                setIsConnected(true);
                toastSuccess(present);
            }
            websocket.onmessage = (event) => {
                setVal(event.data);
            }
            websocket.onerror = () => {
                toastError(present);
                websocket.close();
            }
            websocket.onclose = () => {
                setIsConnected(false);
            }
        } catch (e) {
            toastError(present);
        }
    }, [isConnected, path]);

    return val;
}

export default useWebsocket;

