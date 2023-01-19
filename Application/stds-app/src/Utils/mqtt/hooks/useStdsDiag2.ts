import React, {useEffect} from "react";

const useStdsDiag2 = () => {
    const [diag2, setDiag2] = React.useState("");

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/2/diag');
        websocket.onmessage = (event) => {
            setDiag2(event.data);
        }
    }, []);

    return diag2;
}

export default useStdsDiag2;

