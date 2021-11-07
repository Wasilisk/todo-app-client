import {makeStyles} from "@mui/styles";

const taskPageStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
    },
    tableBox: {
        marginTop: '10px',
        [theme.breakpoints.down('md')]: {
            margin: '10px'
        }
    },
    tableName: {
        padding: '10px'
    },
    tableHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: '20px',
        paddingLeft: '10px'
    },
    buttonGroup: {
        "& > .MuiButton-root": {
            margin: '5px'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    },
}))


export default taskPageStyles;