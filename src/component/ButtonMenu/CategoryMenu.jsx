import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useState} from "react";
import {IconButton} from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {makeStyles} from "@mui/styles";
const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        }
    },
}))

const CategoryMenu = ({openNewTaskModal, openDeleteConfirm}) => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
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
                <MenuItem onClick={() => openNewTaskModal(true)}>Add Note</MenuItem>
                <MenuItem onClick={() => openDeleteConfirm(true)}>Delete</MenuItem>
            </Menu>
        </div>
    );
}

export default CategoryMenu;