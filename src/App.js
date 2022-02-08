import { useState } from "react";
import { Entry, Chat } from "./screens";

const App = () => {
  const [userNickname, setUserNickname] = useState(null);
  const [userAvatar, setUserAvatar] = useState(null);

  return userNickname ? (
    <Chat userNickname={userNickname} userAvatar={userAvatar} />
  ) : (
    <Entry setUserAvatar={setUserAvatar} setUserNickname={setUserNickname} />
  );
};

export default App;
