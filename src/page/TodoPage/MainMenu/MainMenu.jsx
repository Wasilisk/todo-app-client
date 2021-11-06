import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AssignmentIcon from '@mui/icons-material/Assignment';
import {Paper} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {connect} from "react-redux";
import CategoryRow from "../../../component/CategoryRow/CategoryRow";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles({
    root: {
        marginTop: '10px',
        marginBottom: '10px',
        height: '90vh'
    }
})


const MainMenu = ({categories}) => {
    const classes = useStyles();
    const history = useHistory();
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Paper elevation={5} className={classes.root}>
            <List>
                <ListItemButton onClick={()=>history.push('/todo/tasks')}>
                    <ListItemIcon>
                        <AssignmentIcon/>
                    </ListItemIcon>
                    <ListItemText primary="All Task"/>
                </ListItemButton>
                <ListItemButton onClick={handleClick}>
                    <ListItemIcon>
                        <BookmarksIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Categories"/>
                    {open ? <ExpandLess/> : <ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{pl: 4}}>
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add Category"/>
                        </ListItemButton>
                    </List>
                    {categories.categoryList.map(category => <CategoryRow
                        key={category.id}
                        name={category.name}
                        id = {category.id}
                    />)}
                </Collapse>
            </List>
        </Paper>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps, null)(MainMenu)