import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {useHistory} from "react-router";

export default function Header(props: {page:string; dimensionsTitre:number}) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const history = useHistory();

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const openAccueil = () => {
        handleClose();
        history.push("/home");
    }
    const openMaintenance = () => {
        handleClose();
        history.push("/maintenance");
    }
    let selectedAccueil = false;
    let selectedMaintenance = false;
    switch (props.page) {
        case 'Accueil':
            selectedAccueil = true;
            break;
        case 'Maintenance':
            selectedMaintenance = true;
            break;
    }

    return (

        <div className="Header">
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
                onClick={handleMenu}
                sx={{position: "absolute", left: '2%', mr: 2, zIndex: 1}}
            >
                <MenuIcon sx={{color: "#000", fontSize: 40}}/>
            </IconButton>
    <AppBar sx={{position: "static", backgroundColor: "#ffbe76"}}>
        <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                    display: {color: "#000"},
                    fontWeight: "bold",
                    fontStyle: "italic",
                    fontSize: 32,
                    position: "relative",
                    textAlign: "center",
                    width: '100%'
                }}
            >
                STDS
            </Typography>
        </Toolbar>
    </AppBar>

    <Box sx={{
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#F6E58D",
        position: 'relative',
        width: props.dimensionsTitre,
        left: '50%',
        transform: 'translate(-50%,0%)',
        fontWeight: "bold",
        borderBottom: 'solid',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10
    }}>
        {props.page}
    </Box>

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
        <MenuItem onClick={openAccueil} sx={{fontSize: 20}} selected={selectedAccueil}>Accueil</MenuItem>
        <MenuItem onClick={openMaintenance} sx={{fontSize: 20}} selected={selectedMaintenance}>Maintenance</MenuItem>
    </Menu>
        </div>
)
}