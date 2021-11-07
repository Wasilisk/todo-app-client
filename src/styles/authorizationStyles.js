import {makeStyles} from "@mui/styles";

const authorizationStyles = makeStyles({
    root: {
        minWidth: '400px',
        maxWidth: '500px',
        height: "auto",
        border: 0,
        borderRadius: 20,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',

        "& .MuiTextField-root": {
            marginTop: '20px'
        },

        "& .MuiButton-root": {
            marginTop: '20px'
        }
    },
    center: {
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formStyle: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    alertStyle: {
        marginTop: '15px'
    },
    linkText: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10px',
        "& > *": {
            marginLeft: '10px'
        }
    }
});

export default authorizationStyles;