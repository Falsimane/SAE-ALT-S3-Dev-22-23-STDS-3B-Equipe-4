import useStdsTemp1 from "./hooks/useStdsTemp1";
import useStdsTemp2 from "./hooks/useStdsTemp2";
import useStdsPuissance from "./hooks/useStdsPuissance";
import useStdsDiag1 from "./hooks/useStdsDiag1";
import useStdsDiag2 from "./hooks/useStdsDiag2";
import STDSDatasContext from "./STDSDatasContext";
import React, {useEffect} from "react";

const STDSDatasProvider = (props: {children: React.ReactNode}) => {
    const [datas, setDatas] = React.useState({
        temp1: 0,
        temp2: 0,
        puissance: 0,
        diag1: "",
        diag2: ""
    });
    const temp1 = useStdsTemp1();
    const temp2 = useStdsTemp2();
    const puissance = useStdsPuissance();
    const diag1 = useStdsDiag1();
    const diag2 = useStdsDiag2();

    useEffect(() => {
        setDatas({
            temp1: temp1,
            temp2: temp2,
            puissance: puissance,
            diag1: diag1,
            diag2: diag2
        });
    }, [temp1, temp2, puissance, diag1, diag2]);

    return (
        <STDSDatasContext.Provider value={datas}>
            {props.children}
        </STDSDatasContext.Provider>
    );

}

export default STDSDatasProvider;