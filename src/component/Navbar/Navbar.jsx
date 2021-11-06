import {AppBar, Button, Toolbar, Typography} from "@mui/material";

const Navbar = ({username}) => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    {username}
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;