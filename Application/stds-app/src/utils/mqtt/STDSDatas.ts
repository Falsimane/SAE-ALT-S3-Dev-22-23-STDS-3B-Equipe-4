interface STDSDatas {
    temp1: number;
    temp2: number;
    puissance: number;
    co2: number;
    niveau: number;
    diag1: string;
    diag2: string;
}


export const defaultDataValues = {
    temp1: 0,
    temp2: 0,
    puissance: 0,
    co2: 0,
    niveau: 0,
    diag1: "",
    diag2: ""
} as STDSDatas;

export default STDSDatas;
