
import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CircleIcon from "@mui/icons-material/Circle";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';

function CardBox(props: { colordot: string; title: string }) {
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
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                marginRight: 1,
                marginTop: 1
              }}
            >
              <CircleIcon sx={{ color: props.colordot }} />
            </Box>
            </CardContent>
            </CardActionArea>
          </Card>
        
      </Box>
    </Box>
  );
}

export default function App() {
  const colordotTemp = "#22B04B";
  const colordotQuant = "#F49229";
  const colordotPuiss = "#ED1C24";

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="App">
      <AppBar sx={{ position: "static", backgroundColor: "#ffbe76" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleMenu}
            sx={{position: "absolute", mr: 2, zIndex: 1}}
          >
            <MenuIcon sx={{ color: "#000" , fontSize: 40}} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: {color: "#000" },
              fontWeight: "bold",
              fontStyle: "italic",
              fontSize: 25,
                position: "relative",
                textAlign: "center",
                width: '100%'
            }}
          >
            STDS
          </Typography>
        </Toolbar>
      </AppBar>

      <Menu 
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#F6E58D"
          }
        }}
      >
        <MenuItem onClick={handleClose} sx={{fontSize: 20}}>Accueil</MenuItem>
        <MenuItem onClick={handleClose} sx={{fontSize: 20}}>Maintenance</MenuItem>
      </Menu>

      <CardBox colordot={colordotTemp} title={"Température"} />
      <CardBox colordot={colordotQuant} title={"Quantité fût"} />
      <CardBox colordot={colordotPuiss} title={"Puissance"} />
    </div>
  );
}
