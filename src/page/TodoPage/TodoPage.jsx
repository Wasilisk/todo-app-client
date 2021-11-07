import {Grid} from "@mui/material";
import MainMenu from "./MainMenu/MainMenu";
import TaskRouter from "../../routers/TaskRouter";
import Navbar from "../../component/Navbar/Navbar";
import {useEffect} from "react";
import {connect} from "react-redux";
import {setTasks} from "../../store/taskSlice";
import {setCategories} from "../../store/categorySlice";
import {logout} from "../../store/authSlice";

const TodoPage = ({userId, username, setTasks, setCategories, logout}) => {

    useEffect(()=> {
        setTasks(userId);
        setCategories(userId);
    }, [])

    return (
        <>
            <Navbar username={username} logout={logout}/>
            <Grid container>
                <Grid item lg={3} xl={3}>
                    <MainMenu/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={9} xl={9}>
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

export default connect(mapStateToProps, {setTasks, setCategories, logout})(TodoPage)