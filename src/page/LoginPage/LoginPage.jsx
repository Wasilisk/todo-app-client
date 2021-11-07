import React, {useState} from "react";
import {Alert, Button, Paper, TextField, Typography} from "@mui/material";
import useStyles from '../../styles/authorizationStyles'
import {Link, useHistory} from "react-router-dom";
import {useFormik} from 'formik';
import validationSchema from "../../validations/loginValidation";
import {userLogin} from "../../store/authSlice";
import {connect} from "react-redux";

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
                        history.push("/todo/tasks");
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