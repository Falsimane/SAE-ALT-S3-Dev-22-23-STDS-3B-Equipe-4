import React, {useEffect} from "react";

const useStdsTemp2 = () => {
    const [temp2, setTemp2] = React.useState(0);

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/temp/T2');
        websocket.onmessage = (event) => {
            setTemp2(parseFloat(event.data));
        }
    }, []);

    return temp2;
}

export default useStdsTemp2;

