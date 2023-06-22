import React from 'react'
import "./Sidebar.css"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import { IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
// import DonutSmallIcon from '@mui/icons-material/DonutSmall';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
            <IconButton>
                <DonutLargeIcon />
            </IconButton>
            <IconButton>
                <ChatIcon />
            </IconButton> 
            <IconButton>
                <MoreVertIcon />
            </IconButton>  
        </div>
        {/* <div className='sidebar__headerleft'>

        </div> */}
      </div>
      <div className="sidebar__search">
        <div className='sidebar__searchContainer'>
            <SearchIcon />
            <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className='sidebar__chats'>
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar
