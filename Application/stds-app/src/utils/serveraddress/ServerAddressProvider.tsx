import React from "react";
import ServerAddressContext from "./ServerAddressContext";

const ServerAddressProvider = (props: {children: React.ReactNode}) => {
    const localStorageServerAddress = localStorage.getItem("serverAddress");
    const [serverAddress, setServerAddress] = React.useState<string>(
        localStorageServerAddress ? localStorageServerAddress : "127.0.0.1"
    );

    const updateServerAddress = (serverAddress: string) => {
        setServerAddress(serverAddress);
        localStorage.setItem("serverAddress", serverAddress);
    }

    return (
        <ServerAddressContext.Provider value={{serverAddress, updateServerAddress}}>
            {props.children}
        </ServerAddressContext.Provider>
    );
}

export default ServerAddressProvider;