import {Button, Paper, Typography} from "@mui/material";
import useStyles from '../../../styles/taskPageStyles';
import List from "@mui/material/List";
import {connect} from "react-redux";
import Task from "../../../component/Task/Task";
import CompletedTask from "../../../component/CompletedTask/CompletedTask";
import {addTask, completeTask, deleteTask} from "../../../store/taskSlice";
import * as React from "react";
import NewTask from "../../../component/Modals/NewTask/NewTask";
import EmptyList from "../../../component/EmptyList/EmptyList";

const AllTaskPage = ({taskList, categoryList, completeTask, deleteTask, userId, addTask}) => {
    const classes = useStyles();
    const [modalOpen, setModalOpen] = React.useState(false);

    const activeTask = taskList.filter(task => !task.isCompleted)
    const completedTask = taskList.filter(task => task.isCompleted)

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.tableBox}>
                <div className={classes.tableHeader}>
                    <Typography variant='h6' className={classes.tableName}>All tasks</Typography>
                    <div>
                        <Button variant="outlined" onClick={() => setModalOpen(true)}>
                            Add task
                        </Button>
                    </div>
                </div>
                <List>
                    {activeTask.length !== 0 ? null : <EmptyList/>}
                    {activeTask.map(task =>
                        <Task key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask}/>
                    )}
                </List>
                <Typography variant='h6' className={classes.tableName}>Completed tasks</Typography>
                <List>
                    {completedTask.length !== 0 ? null : <EmptyList/>}
                    {completedTask.map(task =>
                        <CompletedTask key={task.id} task={task} deleteTask={deleteTask}/>
                    )}
                </List>
            </Paper>
            <NewTask open={modalOpen} setOpen={setModalOpen}
                     categoryList={categoryList} userId={userId}
                     addTask={addTask} categorySet={true}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        taskList: state.tasks.taskList,
        categoryList: state.categories.categoryList,
        userId: state.auth.authData.id
    }
}

export default connect(mapStateToProps, {completeTask, deleteTask, addTask})(AllTaskPage)