import React from 'react'

import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import ListItemText from '@material-ui/core/ListItemText'

const Message = (props) => (
    <div>
        <ListItem
            alignItems={'flex-start'}
        >
            <ListItemAvatar>
                <Avatar
                    alt={''}
                    src={''}
                />
            </ListItemAvatar>
            <ListItemText
                primary={''}
                secondary={''}
            />
        </ListItem>
    </div>
)

export default Message