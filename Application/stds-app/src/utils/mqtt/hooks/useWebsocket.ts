import React, {useEffect} from "react";

const useWebsocket = <T>(path: string, defaultValue: T) => {
    const [val, setVal] = React.useState(defaultValue);
    const [isConnected, setIsConnected] = React.useState(false);

    useEffect(() => {
        if (isConnected) {
            return;
        }
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/' + path);
        websocket.onopen = () => {
            setIsConnected(true);
        }
        websocket.onmessage = (event) => {
            setVal(event.data);
        }
        websocket.onclose = () => {
            setIsConnected(false);
        }
    }, [isConnected, path]);

    return val;
}

export default useWebsocket;

