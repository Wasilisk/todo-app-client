import {Button, Grid} from "@mui/material";
import AppRouter from "./routers/AppRouter";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) =>({
    root: {
        background: theme.palette.background.default,
        height: '100vh'
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs>
            </Grid>
            <Grid item xs={9}>
                <AppRouter/>
            </Grid>
            <Grid item xs>
            </Grid>
        </Grid>
    );
}

export default App

