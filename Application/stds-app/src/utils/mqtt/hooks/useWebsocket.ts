import React, {useEffect} from "react";
import ServerAddressContext from "../../serveraddress/ServerAddressContext";

const useWebsocket = <T>(path: string, defaultValue: T) => {
    const [val, setVal] = React.useState(defaultValue);
    const [isConnected, setIsConnected] = React.useState(false);
    const {serverAddress} = React.useContext(ServerAddressContext);

    useEffect(() => {
        if (isConnected) {
            return;
        }
        const websocket = new WebSocket('ws://' + serverAddress + ':8080/ws/' + path);
        websocket.onopen = () => {
            setIsConnected(true);
        }
        websocket.onmessage = (event) => {
            setVal(event.data);
        }
        websocket.onerror = () => {
            websocket.close();
        }
        websocket.onclose = () => {
            setIsConnected(false);
        }
    }, [isConnected, path]);

    return val;
}

export default useWebsocket;

