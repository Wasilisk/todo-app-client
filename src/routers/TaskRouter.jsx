import {Route, Switch} from "react-router-dom";
import AllTaskPage from "../page/TodoPage/AllTaskPage/AllTaskPage";
import CategoryTaskPage from "../page/TodoPage/CategoryTaskPage/CategoryTaskPage";

const TaskRouter = () => {
    return (
        <>
            <Switch>
                <Route path="/tasks" exact>
                    <AllTaskPage/>
                </Route>
                <Route path="/category/:id">
                    <CategoryTaskPage/>
                </Route>
            </Switch>
        </>
    )
}

export default TaskRouter;