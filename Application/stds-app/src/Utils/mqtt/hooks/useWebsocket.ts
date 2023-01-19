import React, {useEffect} from "react";

const useWebsocket = <T>(path: string, defaultValue: T) => {
    const [val, setVal] = React.useState(defaultValue);

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/' + path);
        websocket.onmessage = (event) => {
            setVal(event.data);
            websocket.close();
        }
    }, [path]);

    return val;
}

export default useWebsocket;
