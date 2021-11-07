import * as React from 'react';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import useStyles from "../../../styles/modalStyles";
import { Button, Paper} from "@mui/material";

const DeleteConfirm = ({open, setOpen, confirmText, deleteEntity, entityId}) => {
    const classes = useStyles();

    return (
        <>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
            >
                <Paper className={classes.root} elevation={8} sx={{width: 250}}>
                    <Typography align="center" variant="h5">{confirmText}</Typography>
                    <div className={classes.confirmGroup}>
                    <Button variant="outlined" color="success" onClick={() => deleteEntity(entityId)}>
                        Delete
                    </Button>
                    <Button variant="outlined" color="error" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    </div>
                </Paper>
            </Modal>
        </>
    );
}

export default DeleteConfirm;