import STDSDatas from "./STDSDatas";
import React from "react";

const STDSDatasContext = React.createContext<STDSDatas>({
    temp1: 0,
    temp2: 0,
    puissance: 0,
    co2: 0,
    niveau: 0,
    diag1: "",
    diag2: ""
});

export default STDSDatasContext;
