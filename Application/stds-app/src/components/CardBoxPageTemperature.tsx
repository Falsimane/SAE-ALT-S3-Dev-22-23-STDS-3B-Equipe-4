import * as React from "react";
import {useContext} from "react";
import CircleIcon from "@mui/icons-material/Circle";
import {useHistory} from "react-router";
import STDSDatasContext from "../utils/mqtt/STDSDatasContext";
import HalfDonut from "./HalfDonut";
import {Alert, Box, Card, CardActionArea, CardContent, Typography, useTheme} from "@mui/material";
import {checkTemp} from "../utils/errors/checkErrors";
import ErrorAlert from "./ErrorAlert";
import {getErrorColor} from "../utils/errors/ErrorUtils";

export default function CardBoxTemperature(){
    const history = useHistory();
    const datas = useContext(STDSDatasContext);
    const theme = useTheme();
    const tempErrors = checkTemp(datas.temp1, datas.temp2);

    const openPage = () => {
        history.push("/temperature");
    }

    const openPageAmbiante = () => {
        history.push("/temperature-interieure");
    }

    const getColor = (errorLevel: 0 | 1 | 2) => {
        return getErrorColor(errorLevel, theme);
    }

    return (
        <Box sx={{width: '90%', margin: 'auto'}}>
            <Typography sx={{textAlign: "left",fontWeight: "bold",fontSize: 20,marginBottom: 1}}>
                    Températures
            </Typography>
            <Box sx={{display:'flex', justifyContent:'space-between'}}>
                <Card sx={{ backgroundColor: "#E6E6E6", width: "48%" }}>
                    <CardActionArea onClick={openPage} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: '15%', textAlign:'center'}}>
                                <HalfDonut value={(datas.temp2+10)*2} width={100} valueColor={getColor(tempErrors.temp2.errorLevel)}/>
                                <Typography>Fût <br/>{datas.temp2}C°</Typography>
                            </Box>
                            <CircleIcon sx={{ color: getColor(tempErrors.temp2.errorLevel), position: "absolute", right: 5}} />
                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{ backgroundColor: "#E6E6E6", width: "48%" }}>
                    <CardActionArea onClick={openPageAmbiante} sx={{height: '100%'}}>
                        <CardContent sx={{display: "flex", alignItems: "center", height: "100%", padding : 0}}>
                            <Box sx={{marginLeft: '15%'}}>
                                <HalfDonut value={(datas.temp1+10)*2} width={100} valueColor={getColor(tempErrors.temp1.errorLevel)}/>
                                <Typography>Ambiante <br/>{datas.temp1}C°</Typography>
                            </Box>

                            <CircleIcon sx={{ color: getColor(tempErrors.temp1.errorLevel), position: "absolute", right: 5}} />

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Box>

            <ErrorAlert error={tempErrors.temp2} />
            {tempErrors.temp1.errorLevel > 0 && tempErrors.temp2.errorLevel === 0 ?
                <Alert severity={tempErrors.temp1.errorLevel === 1 ? 'warning' : 'error'} sx={{marginTop:2}}>{tempErrors.temp1.message}</Alert>
                : null
            }
        </Box>
    );
}