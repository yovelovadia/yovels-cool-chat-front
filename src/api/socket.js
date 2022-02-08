import socketClient from "socket.io-client";

export const socketCl = socketClient(process.env.REACT_APP_BASE_URL);

export const connectToChat = (nickname) => {
  socketCl.emit("join_chat", nickname);
};

export const sendMessage = (data) => {
  socketCl.emit("send_message", data);
};

export const recieveMessage = (callback) => {
  socketCl.on("receive_message", callback);
};
