import React, { useState } from "react";
import { Input, Button } from "@mui/material";
import { EntryElement } from "../styles/styled";
import { AvatarSelector } from "../components";
import { spongebob } from "../assets";

const Entry = ({ setUserNickname, setUserAvatar }) => {
  const [nickname, setNickname] = useState(null);
  const [avatar, setAvatar] = useState(0);

  const handleOnSubmit = () => {
    setUserNickname(nickname);
    setUserAvatar(avatar);
  };

  const handleOnChange = (e) => {
    setNickname(e.target.value);
  };

  const handleAvatarPick = (e) => {
    setAvatar(e.target.value);
  };

  return (
    <EntryElement>
      <AvatarSelector avatar={avatar} handleAvatarPick={handleAvatarPick} />
      <h1>Write your nickname</h1>
      <Input className="textInput" onChange={handleOnChange} placeholder="Nickname" />
      <Button className="submitButton" variant="contained" onClick={handleOnSubmit}>
        Submit Nickname
      </Button>
      <img className="spongeBobImage" src={spongebob} alt="No" />
    </EntryElement>
  );
};

export default Entry;
