import React, { useEffect, useState } from "react";
import { MessageBubble, ChatBox } from "../components";
import { apis, socket } from "../api";
import { ChatElement } from "../styles/styled";

const Chat = ({ userNickname, userAvatar }) => {
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getLatestMessages = async () => {
      const { data } = await apis.getLatestMessages();
      setMessages(data);
    };

    socket.connectToChat(userNickname);
    getLatestMessages();
  }, [userNickname]);

  useEffect(() => {
    socket.recieveMessage((data) => {
      setMessages((curr) => [data, ...curr]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket.socketCl]);

  const handleOnChange = (e) => {
    setChatInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (chatInput) {
      const messageObject = {
        avatar: userAvatar,
        message: chatInput,
        nickname: userNickname,
        date: new Date().getTime(),
      };

      setChatInput("");
      setMessages((curr) => [messageObject, ...curr]);
      socket.sendMessage(messageObject);
      apis.addNewMessage(messageObject);
    }
  };

  return (
    <ChatElement>
      <div className="messagesArea">
        {messages.map((props) => (
          <MessageBubble isCurrentUser={userNickname === props.nickname} {...props} />
        ))}
      </div>
      <ChatBox handleOnChange={handleOnChange} handleSendMessage={handleSendMessage} chatInput={chatInput} />
    </ChatElement>
  );
};

export default Chat;
