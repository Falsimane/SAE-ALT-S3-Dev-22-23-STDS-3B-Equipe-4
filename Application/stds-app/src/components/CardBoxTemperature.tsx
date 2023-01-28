import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";
import HalfDonut from "./HalfDonut";
import CircleIcon from "@mui/icons-material/Circle";
import {useContext} from "react";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import {useTheme} from "@mui/material";
import {checkTemp} from "../utils/errors/checkErrors";
import {getErrorColor} from "../utils/errors/ErrorUtils";

export default function CardBoxTemperature(props: { titre:string}) {

    const datas = useContext(STDSDatasContext);
    const theme = useTheme();
    const tempErrors = checkTemp(datas.temp1, datas.temp2);

    const getColor = (errorLevel: 0 | 1 | 2) => {
        return getErrorColor(errorLevel, theme);
    }

    const getChoixColor = () => {
        if (props.titre === "Fût"){
            return getColor(tempErrors.temp2.errorLevel);
        } else if (props.titre === "Ambiante"){
            return getColor(tempErrors.temp1.errorLevel);
        }
    }

    let temp = 0;
    if(props.titre === "Fût"){
        temp = datas.temp2;
    } else if (props.titre === "Ambiante"){
        temp = datas.temp1;
    }

    return (
        <Box >
            <Box sx={{ display:'flex', justifyContent: "center", marginTop: 5 }}>
                <Card sx={{ backgroundColor: "#E6E6E6", width: "90%", height: 120 }}>
                    <CardContent sx={{display: "flex", justifyContent: 'space-around',alignItems : 'center', height: "100%", padding : 0}}>
                        <HalfDonut value={(temp+10)*2} width={100} height={100} valueColor={getChoixColor()} />
                        <Box width={70}>
                            <Typography textAlign={"center"}>{props.titre} <br/>{temp}C°</Typography>
                        </Box>
                        <CircleIcon sx={{ color: getChoixColor()}} />
                    </CardContent>
                </Card>
            </Box>
        </Box>
    );
}