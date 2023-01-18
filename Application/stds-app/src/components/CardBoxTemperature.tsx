import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function CardBoxTemperature(props: {title: string}){

    return (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 5 }}>
            <Box sx={{ width: "90%" }}>
                <Typography
                    sx={{
                        textAlign: "left",
                        fontWeight: "bold",
                        fontSize: 20,
                        marginBottom: 1
                    }}
                >
                    {" "}
                    {props.title}{" "}
                </Typography>


                <Card sx={{ backgroundColor: "#E6E6E6", height: 120 }}>
                    <CardActionArea sx={{height: '100%'}}>
                        <CardContent>

                        </CardContent>
                    </CardActionArea>
                </Card>

            </Box>
        </Box>
    );
}