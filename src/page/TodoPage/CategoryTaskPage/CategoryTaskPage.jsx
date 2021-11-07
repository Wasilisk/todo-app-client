import {Button, Paper, Typography} from "@mui/material";
import {makeStyles} from "@mui/styles";
import List from "@mui/material/List";
import {connect} from "react-redux";
import Task from "../../../component/Task/Task";
import CompletedTask from "../../../component/CompletedTask/CompletedTask";
import {addTask, completeTask, deleteTask} from "../../../store/taskSlice";
import {useHistory, useParams} from "react-router-dom";
import * as React from "react";
import useStyles from '../../../styles/taskPageStyles';
import NewTask from "../../../component/Modals/NewTask/NewTask";
import DeleteConfirm from "../../../component/Modals/DeleteConfirm/DeleteConfirm";
import {deleteCategory} from "../../../store/categorySlice";
import {categoryApi} from "../../../api/api";
import CategoryMenu from "../../../component/ButtonMenu/CategoryMenu";
import EmptyList from "../../../component/EmptyList/EmptyList";

const CategoryTaskPage = ({taskList, categoryList, completeTask, deleteTask, userId, addTask, deleteCategory}) => {
    const classes = useStyles();
    const history = useHistory();
    let {categoryId} = useParams();
    const [modalOpen, setModalOpen] = React.useState(false);
    const [confirmOpen, setConfirmOpen] = React.useState(false);

    const currentCategory = categoryList.find(category => category.id == categoryId)
    const categoryActiveTask = taskList.filter(task => (!task.isCompleted && task.categoryId == categoryId))
    const categoryCompletedTask = taskList.filter(task => (task.isCompleted && task.categoryId == categoryId))

    const deleteThisCategory = (categoryId) => {
        categoryApi.deleteCategory(categoryId).then(() => {
                history.push("/todo/tasks")
                deleteCategory(categoryId)
            }
        )
    }

    return (
        <div className={classes.root}>
            <Paper elevation={5} className={classes.tableBox}>
                <div className={classes.tableHeader}>
                    <Typography variant='h6' className={classes.tableName}>{currentCategory.name}</Typography>
                    <>
                        <CategoryMenu openNewTaskModal={setModalOpen}
                                      openDeleteConfirm={setConfirmOpen}
                        />
                        <div className={classes.buttonGroup}>
                            <Button variant="outlined" onClick={() => setModalOpen(true)}>
                                Add task
                            </Button>
                            <Button variant="outlined" color="error" onClick={() => setConfirmOpen(true)}>
                                Delete
                            </Button>
                        </div>
                    </>
                </div>
                <List>
                    {categoryActiveTask.length !== 0 ? null : <EmptyList/>}
                    {categoryActiveTask.map(task =>
                            <Task key={task.id} task={task} completeTask={completeTask} deleteTask={deleteTask}/>
                    )}
                </List>
                <Typography variant='h6' className={classes.tableName}>Completed tasks</Typography>
                <List>
                    {categoryCompletedTask.length !== 0 ? null : <EmptyList/>}
                    {categoryCompletedTask.map(task =>
                        <CompletedTask key={task.id} task={task} deleteTask={deleteTask}/>
                    )}
                </List>
            </Paper>
            <NewTask open={modalOpen} setOpen={setModalOpen}
                     categoryList={categoryList} userId={userId}
                     addTask={addTask} categorySet={false}
                     currentCategory={currentCategory}
            />
            <DeleteConfirm open={confirmOpen} setOpen={setConfirmOpen}
                           confirmText={"Delete this category ?"}
                           deleteEntity={deleteThisCategory}
                           entityId={currentCategory.id}/>
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

export default connect(mapStateToProps, {completeTask, deleteTask, addTask, deleteCategory})(CategoryTaskPage)
