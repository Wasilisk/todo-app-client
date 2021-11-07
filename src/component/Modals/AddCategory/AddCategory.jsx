import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "../../../styles/modalStyles";
import { Button, Paper, TextField} from "@mui/material";
import {useFormik} from "formik";
import {categoryApi} from "../../../api/api";


const AddCategory = ({open, setOpen, userId, addCategory}) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            name: "",
        },
        onSubmit: (values) => {
            categoryApi.addCategory(values.name, userId).then(data=> addCategory(data))
        },
    });

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Paper className={classes.root} elevation={8}>
                    <Typography align="center" variant="h5">Create new category</Typography>
                    <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
                        <TextField
                            label="Name"
                            variant="filled"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                        <Button variant="contained" type="submit">Create</Button>
                    </form>
                </Paper>
            </Modal>
        </>
    );
}

export default AddCategory;