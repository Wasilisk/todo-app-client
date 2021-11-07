import {AppBar, Button, Drawer, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import {useState} from "react";
import DrawerMenu from "../../page/TodoPage/DrawerMenu/DrawerMenu";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        "& > .MuiIconButton-root": {
            marginRight: '10px',
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        }
    }
}));

const Navbar = ({username, logout}) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState();
    return (
        <AppBar position="sticky">
            <Toolbar className={classes.root}>
                    <IconButton onClick={() => setOpenDrawer(true)}>
                        <MenuIcon/>
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={openDrawer}
                        onClose={() => setOpenDrawer(false)}
                    >
                        <DrawerMenu/>
                    </Drawer>
                    <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                        {username}
                    </Typography>
                <Button color="inherit" onClick={logout}>Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;