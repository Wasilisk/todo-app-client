import {Grid} from "@mui/material";
import MainMenu from "./MainMenu/MainMenu";
import TaskRouter from "../../routers/TaskRouter";
import Navbar from "../../component/Navbar/Navbar";
import {useEffect} from "react";
import {connect} from "react-redux";
import {setTasks} from "../../store/taskSlice";
import {setCategories} from "../../store/categorySlice";

const TodoPage = ({userId, username, setTasks, setCategories}) => {

    useEffect(()=> {
        setTasks(userId);
        setCategories(userId);
    }, [])

    return (
        <>
            <Navbar username={username}/>
            <Grid container>
                <Grid item xs={3}>
                    <MainMenu/>
                </Grid>
                <Grid item xs={9}>
                    <TaskRouter/>
                </Grid>
            </Grid>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.authData.id,
        username: state.auth.authData.username
    }
}

export default connect(mapStateToProps, {setTasks, setCategories})(TodoPage)