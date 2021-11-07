import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "../../../styles/modalStyles";
import {Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField} from "@mui/material";
import {useFormik} from "formik";
import {taskApi} from "../../../api/api";

const NewTask = ({open, setOpen, categoryList, userId, addTask, categorySet, currentCategory}) => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            description: "",
            categoryId: categorySet ? "" : currentCategory.id ,
        },
        onSubmit: (values) => {
            taskApi.addTask(userId, values.description, values.categoryId).then(data =>
                addTask(data)
            )
        },
    });

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Paper className={classes.root} elevation={8}>
                    <Typography align="center" variant="h5">Create new task</Typography>
                    <form onSubmit={formik.handleSubmit} className={classes.formStyle}>
                        <TextField
                            label="Description"
                            variant="filled"
                            name="description"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                        />
                        {categorySet ?
                            <FormControl variant="filled">
                                <InputLabel id="demo-simple-select-filled-label">Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-filled-label"
                                    id="demo-simple-select-filled"
                                    name="categoryId"
                                    value={formik.values.categoryId}
                                    onChange={formik.handleChange}
                                    required
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {categoryList.map(category => <MenuItem
                                            key={category.id}
                                            value={category.id}>
                                            {category.name}
                                        </MenuItem>
                                    )}
                                </Select>
                            </FormControl> : null}
                        <Button variant="contained" type="submit">Create Task</Button>
                    </form>
                </Paper>
            </Modal>
        </>
    );
}

export default NewTask;