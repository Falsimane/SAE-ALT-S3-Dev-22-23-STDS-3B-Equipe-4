import React, {useEffect} from "react";
import mqtt from "mqtt";

const mqttScrapper = () => {
    const [connectionStatus, setConnectionStatus] = React.useState(false);

    useEffect(() => {
        const client = mqtt.connect("mqtt://iot.iut-blagnac.fr:8083")
        client.on("connect", () => {
            setConnectionStatus(true);
        })
    }, []);
    console.log(connectionStatus);
}

export default mqttScrapper;

