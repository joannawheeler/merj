import React, { Component } from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon color={grey400} />
  </IconButton>
);
const rightIconMenu = (
  <IconMenu iconButtonElement={iconButtonElement}>
    <MenuItem>Reply</MenuItem>
    <MenuItem>Forward</MenuItem>
    <MenuItem>Delete</MenuItem>
  </IconMenu>
);

const ChatMessage = (props) => {

  return (
    <List>
      <Subheader>{props.time}</Subheader>
      <ListItem
        leftAvatar={<Avatar src={props.image} />}
        rightIconButton={rightIconMenu}
        primaryText={<span style={{color: 'darkBlack', fontSize: 18 + 'px'}}>{props.user}</span>}
        secondaryText={
          <p>
         <span style={{color: 'black', fontSize: 22 + 'px'}}>{props.message}</span>
          </p>
        }
      />
    </List>
  )
}

export { ChatMessage }