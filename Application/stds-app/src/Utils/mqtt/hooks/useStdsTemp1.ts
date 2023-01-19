import React, {useEffect} from "react";

const useStdsTemp1 = () => {
    const [temp1, setTemp1] = React.useState(0);

    useEffect(() => {
        const websocket = new WebSocket('ws://127.0.0.1:8080/ws/temp/T1');
        websocket.onmessage = (event) => {
            setTemp1(parseFloat(event.data));
        }
    }, []);

    return temp1;
}

export default useStdsTemp1;

