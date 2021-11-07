import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import {IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';

const TaskMenu = ({openDeleteConfirm, completeTask, taskId}) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <MoreVertIcon/>
            </IconButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={() => completeTask(taskId)}>Complete</MenuItem>
                <MenuItem onClick={() => openDeleteConfirm(true)}>Delete</MenuItem>
            </Menu>
        </div>
    );
}

export default TaskMenu;