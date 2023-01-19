import React, {useEffect} from "react";

const useStdsPuissance = () => {
    const [puissance, setPuissance] = React.useState(0);

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/puissance');
        websocket.onmessage = (event) => {
            setPuissance(parseFloat(event.data));
        }
    }, []);

    return puissance;
}

export default useStdsPuissance;

