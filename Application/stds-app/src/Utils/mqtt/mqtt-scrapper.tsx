import React, {useEffect} from "react";
import mqtt from "mqtt";

const mqttScrapper = () => {
    const [connectionStatus, setConnectionStatus] = React.useState(false);

    useEffect(() => {
        const client = mqtt.connect({
            host: "iot.iut-blagnac.fr",
            port: 1883,
            username: "student",
            password: "student"
        })
        client.on("connect", () => {
            setConnectionStatus(true);
        })
    }, []);
    console.log(connectionStatus);
}

export default mqttScrapper;

