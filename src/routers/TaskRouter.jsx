import {Route, Switch, useRouteMatch} from "react-router-dom";
import AllTaskPage from "../page/TodoPage/AllTaskPage/AllTaskPage";
import CategoryTaskPage from "../page/TodoPage/CategoryTaskPage/CategoryTaskPage";

const TaskRouter = () => {
    let { path } = useRouteMatch();

    return (
        <>
            <Switch>
                <Route path={`${path}/tasks`} exact>
                    <AllTaskPage/>
                </Route>
                <Route path={`${path}/category/:categoryId`}>
                    <CategoryTaskPage/>
                </Route>
            </Switch>
        </>
    )
}

export default TaskRouter;