import React, { useState } from 'react';
import { IconButton, Avatar } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import axios from './axios';
import "./Chat.css";

function Chat({ messages }) {

  const [input, setInput] = useState("");

  const sendMessage = (e) => {
    e.preventDefault();

    axios.post('/messages/new', {
      message:input,
      name: "DEMO APP",
      timestamp: "Just now!",
      received: false
    });
    setInput('');
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar />
        <div className='chat__headerInfo'>
          <h3>Room name</h3>
          <p>Last seen at...</p>
        </div>
        <div className="chat__headerRight">
        <IconButton>
                <SearchIcon />
            </IconButton>
            <IconButton>
                <AttachFileIcon />
            </IconButton> 
            <IconButton>
                <MoreVertIcon />
          </IconButton>  
        </div>
      </div>
      <div className="chat__body">
        {messages.map((message) => 
        <p className={`chat__message ${message.received && "chat__receiver"} `}>
          <span className='chat__name'>{message.name}</span>
          {message.message}
          <span className='chat__timestamp'>
            {message.timestamp}
          </span>
        </p>
          )}
      </div>
      <div className='chat__footer'>
        <InsertEmoticonIcon />
        <form>
          <input value={input} onChange = {e => setInput(e.target.value)} placeholder='Type a message' type="text" />
          <button onClick = {sendMessage} type="submit">Send a message</button>

        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat
