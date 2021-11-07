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
import {connect} from "react-redux";
import Category from "../../../component/Category/Category";
import {useHistory} from "react-router-dom";
import AddCategory from "../../../component/Modals/AddCategory/AddCategory";
import {addCategory} from "../../../store/categorySlice";

const DrawerMenu = ({categories, userId, addCategory}) => {
    const history = useHistory();
    const [open, setOpen] = React.useState(true);
    const [modalOpen, setModalOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
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
                        <ListItemButton sx={{pl: 4}} onClick={()=>setModalOpen(true)}>
                            <ListItemIcon>
                                <AddIcon/>
                            </ListItemIcon>
                            <ListItemText primary="Add Category"/>
                        </ListItemButton>
                    </List>
                    {categories.categoryList.map(category => <Category
                        key={category.id}
                        name={category.name}
                        id = {category.id}
                    />)}
                </Collapse>
            </List>
            <AddCategory open={modalOpen} setOpen={setModalOpen} userId={userId} addCategory={addCategory}/>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories,
        userId: state.auth.authData.id,
    }
}

export default connect(mapStateToProps, {addCategory})(DrawerMenu)