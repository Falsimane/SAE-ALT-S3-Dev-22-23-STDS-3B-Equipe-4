import STDSDatasContext from "./STDSDatasContext";
import React, {useEffect} from "react";
import useWebsocket from "./hooks/useWebsocket";

const STDSDatasProvider = (props: {children: React.ReactNode}) => {
    const [datas, setDatas] = React.useState({
        temp1: 0,
        temp2: 0,
        puissance: 0,
        co2: 0,
        niveau: 0,
        diag1: "",
        diag2: ""
    });
    const temp1 = useWebsocket<number>("temp/T1", 0);
    const temp2 = useWebsocket<number>("temp/T2", 0);
    const puissance = useWebsocket<number>("puissance", 0);
    const co2 = useWebsocket<number>("2/co2", 0);
    const niveau = useWebsocket<number>("2/niveau", 0);
    const diag1 = useWebsocket<string>("1/diag", "");
    const diag2 = useWebsocket<string>("2/diag", "");

    useEffect(() => {
        setDatas({
            temp1: temp1,
            temp2: temp2,
            puissance: puissance,
            co2: co2,
            niveau: niveau,
            diag1: diag1,
            diag2: diag2
        });
    }, [temp1, temp2, puissance, co2, niveau, diag1, diag2]);

    return (
        <STDSDatasContext.Provider value={datas}>
            {props.children}
        </STDSDatasContext.Provider>
    );

}

export default STDSDatasProvider;