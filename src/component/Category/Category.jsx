import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import * as React from "react";
import {useHistory} from "react-router-dom";

const Category = ({name, id}) => {
    const history = useHistory();
    const ChangeCategoryPage = () => {
        history.push(`/todo/category/${id}`)
    }

    return (
        <List component="div" disablePadding>
            <ListItemButton sx={{pl: 4}} onClick={ChangeCategoryPage}>
                <ListItemIcon>
                    <TurnedInNotIcon/>
                </ListItemIcon>
                <ListItemText primary={name}/>
            </ListItemButton>
        </List>
    )
}

export default Category;