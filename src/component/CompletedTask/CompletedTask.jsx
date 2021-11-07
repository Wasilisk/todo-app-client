import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {Button, Divider, ListItem} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {taskApi} from "../../api/api";
import DeleteConfirm from "../Modals/DeleteConfirm/DeleteConfirm";
import TaskMenu from "../ButtonMenu/TaskMenu";

const useStyles = makeStyles((theme)=>({
    buttonGroup: {
        "& > .MuiButton-root": {
            margin: '5px'
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        }
    },
    buttonsMenu: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
}))

const CompletedTask = ({task, deleteTask}) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = React.useState(false);

    const deleteThisTask = (taskId) => {
        taskApi.deleteTask(taskId).then(
            deleteTask(taskId)
        )
    }

    return (
        <>
            <Divider/>
            <ListItem
                secondaryAction={
                    <>
                        <div edge="end" className={classes.buttonsMenu}>
                            <TaskMenu openDeleteConfirm={setModalOpen}/>
                        </div>
                        <div edge="end" className={classes.buttonGroup}>
                            <Button variant="outlined" color="error" onClick={() => setModalOpen(true)}>
                                Delete
                            </Button>
                        </div>
                    </>
                }
                disablePadding>
                <ListItemButton>
                    <ListItemText primary={task.description}/>
                </ListItemButton>
            </ListItem>
            <Divider/>
            <DeleteConfirm open={modalOpen} setOpen={setModalOpen}
                           confirmText={"Delete this task ?"}
                           deleteEntity={deleteThisTask} entityId={task.id}/>
        </>
    )
}

export default CompletedTask;