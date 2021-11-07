import {makeStyles} from "@mui/styles";

const modalStyles = makeStyles({
    root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        padding: '20px',
        boxShadow: 24,
    },
    formStyle: {
        marginTop: '10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        "& > .MuiFormControl-root": {
            marginTop: "10px",
            marginBottom: "10px"
        }
    },
    confirmGroup: {
        marginTop: '20px',
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        "& > .MuiButton-root": {
            margin: '5px'
        }
    }
})

export default modalStyles;