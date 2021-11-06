import {connect} from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";
import RegistrationPage from "../page/RegistrationPage/RegistrationPage";
import LoginPage from "../page/LoginPage/LoginPage";
import TodoPage from "../page/TodoPage/TodoPage";

const AppRouter = ({isAuth}) => {
    return (
        <>
            <Switch>
                <Route path="/registration" exact>
                    <RegistrationPage/>
                </Route>
                <Route path="/login" exact>
                    <LoginPage/>
                </Route>
                {
                    isAuth ? <Route path="/todo">
                        <TodoPage/>
                    </Route> : null
                }
            </Switch>
            <Redirect to="/login"/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, null)(AppRouter);