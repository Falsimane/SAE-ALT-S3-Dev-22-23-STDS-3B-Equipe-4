import React from "react";
import ColorMode from "./ColorMode";
import ColorModeContext from "./ColorModeContext";

const ColorModeProvider = (props: {children: React.ReactNode}) => {
    const [colorMode, setColorMode] = React.useState<ColorMode>(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

    const toggleColorMode = () => {
        setColorMode(colorMode === "light" ? "dark" : "light");
    }

    React.useEffect(() => {
        document.body.classList.toggle("dark", colorMode === "dark");
    }, [colorMode]);

    return (
        <ColorModeContext.Provider value={{colorMode, toggleColorMode}}>
            {props.children}
        </ColorModeContext.Provider>
    );
}

export default ColorModeProvider;