import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import {Button, Divider, ListItem} from "@mui/material";
import {taskApi} from "../../api/api";
import DeleteConfirm from "../Modals/DeleteConfirm/DeleteConfirm";
import TaskMenu from "../ButtonMenu/TaskMenu";
import Typography from "@mui/material/Typography";


const EmptyList = () => {
    return (
        <>
            <Divider/>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemText
                        primary={
                            <Typography
                                sx={{display: 'inline'}}
                            >
                                The list is empty
                            </Typography>
                        }/>
                </ListItemButton>
            </ListItem>
            <Divider/>
        </>
    )
}

export default EmptyList;