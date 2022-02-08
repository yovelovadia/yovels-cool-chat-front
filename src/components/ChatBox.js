import React from "react";
import { InputBase, IconButton } from "@mui/material";
import { SendRounded } from "@mui/icons-material";
import { ChatBoxElement } from "../styles/styled";

const ChatBox = ({ handleOnChange, handleSendMessage, chatInput }) => {
  const handleEnterKeyDown = (e) => {
    if (e.shiftKey && e.key === "Enter") return;

    if (e.key === "Enter" && chatInput) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <ChatBoxElement>
      <InputBase
        multiline
        maxRows={3}
        value={chatInput}
        onChange={handleOnChange}
        onKeyDown={handleEnterKeyDown}
        variant="filled"
        className="chatInput"
        placeholder="Type a message"
      />
      {chatInput && (
        <IconButton className="sendButton" onClick={handleSendMessage}>
          <SendRounded />
        </IconButton>
      )}
    </ChatBoxElement>
  );
};

export default ChatBox;
