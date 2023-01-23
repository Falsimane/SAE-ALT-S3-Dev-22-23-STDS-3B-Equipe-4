import React from "react";

const ColorModeContext = React.createContext({
    colorMode: "light",
    toggleColorMode: () => {},
});

export default ColorModeContext;