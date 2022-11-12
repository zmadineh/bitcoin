import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';

import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";

const CreateList = ({list}) => {

    return (
            <List dir={'rtl'}>
                {list.map( (listItem) => (
                    <ListItem key={listItem.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Icon>{listItem.icon}</Icon>
                            </ListItemIcon>
                            <Box component={'div'}>
                                <ListItemText primary={listItem.title}/>
                            </Box>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

    )
}

export default CreateList;