import {List,ListItemText, ListItem, ListItemAvatar } from '@mui/material'
import React from 'react'
import './List.css';

function Todo(props) {
    return (
        <List className="list">
            <ListItem>
                <ListItemAvatar>
                   
                    </ListItemAvatar>
                <ListItemText primary={props.text} />
                </ListItem>
                </List>

            
        
    )
}

export default Todo
