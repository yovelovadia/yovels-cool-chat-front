import React from "react";
import { Paper, Avatar } from "@mui/material";
import { MessageBubbleElement } from "../styles/styled";
import { avatars } from "../assets";

const MessageBubble = ({ isCurrentUser, message, nickname, date, avatar }) => {
  const formattedTime = new Date(date).toLocaleTimeString();

  return (
    <MessageBubbleElement user={isCurrentUser}>
      <div>
        {!isCurrentUser && <p className="nickname">{nickname}</p>}
        <div className="flexContainer">
          {!isCurrentUser && <Avatar src={avatars[avatar]} className="avatar" />}
          <Paper className="message">{message}</Paper>
          <p className="time">{formattedTime}</p>
        </div>
      </div>
    </MessageBubbleElement>
  );
};

export default MessageBubble;
