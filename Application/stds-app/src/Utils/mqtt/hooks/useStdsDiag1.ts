import React, {useEffect} from "react";

const useStdsDiag1 = () => {
    const [diag1, setDiag1] = React.useState("");

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/1/diag');
        websocket.onmessage = (event) => {
            setDiag1(event.data);
        }
    }, []);

    return diag1;
}

export default useStdsDiag1;

