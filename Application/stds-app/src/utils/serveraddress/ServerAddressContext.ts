import React from "react";

const ServerAddressContext = React.createContext({
    serverAddress: "127.0.0.1",
    updateServerAddress: (serverAddress: string) => {},
});
export default ServerAddressContext;