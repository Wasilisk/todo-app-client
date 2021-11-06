import React, {useState} from "react";
import {Alert, Button, Paper, TextField, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {Link, useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import validationSchema from "../../validations/loginValidation";
import {userLogin} from "../../store/authSlice";
import {connect} from "react-redux";

const useStyles = makeStyles({
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

const LoginPage = ({userLogin, errors}) => {
    const classes = useStyles();
    const history = useHistory();

    const [error, setError] = useState("");

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            userLogin(values).then(data => {
                    if (!data.payload.message) {
                        history.push("/todo");
                    }  else {
                        setError(data.payload.message)
                    }
                }
            );
        },
    });

    return (
        <div className={classes.center}>
        <Paper elevation={3} className={classes.root}>
            <Typography variant="h5" align="center">Login</Typography>
            <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
                <TextField
                    label="Email"
                    variant="filled"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    label="Password"
                    variant="filled"
                    type="password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}

                />
                {
                    error ? <Alert severity="error" className={classes.alertStyle}>{error}</Alert> : null
                }
                <Button variant="contained" type="submit">Login</Button>
            </form>
            <div className={classes.linkText}>
                <Typography>Not registered yet? </Typography>
                <Link to="/registration">Registration</Link>
            </div>
        </Paper>
        </div>
    )
}

export default connect(null, {userLogin})(LoginPage);