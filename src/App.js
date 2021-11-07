import {Grid} from "@mui/material";
import AppRouter from "./routers/AppRouter";
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles((theme) =>({
    root: {
        background: theme.palette.background.default,
        minHeight: '100vh'
    },
}));

function App() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root}>
            <Grid item xs md={1}>
            </Grid>
            <Grid item xs={12} md={10}>
                <AppRouter/>
            </Grid>
            <Grid item xs md={1}>
            </Grid>
        </Grid>
    );
}

export default App

