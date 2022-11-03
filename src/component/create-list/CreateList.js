import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Icon from "@mui/icons-material";

const CreateList = ({list}) => {
    // console.log(list)
    return (
        <List>

            {list.map( (listItem, index) => (
                <ListItem key={listItem.title} disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {/*{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                            {/*<Icon>{listItem.icon}</Icon>*/}
                            {listItem.icon}
                        </ListItemIcon>
                        <ListItemText primary={listItem.title} />
                    </ListItemButton>
                </ListItem>
                ))}
        </List>
    )
}

export default CreateList;