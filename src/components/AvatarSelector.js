import React from "react";
import { Avatar, Select, MenuItem } from "@mui/material";
import { avatars } from "../assets";

const AvatarSelector = ({ avatar, handleAvatarPick }) => (
  <>
    <h1>Which SpongeBob are you today?</h1>
    <Select value={avatar} onChange={handleAvatarPick}>
      {avatars.map((avatar, index) => (
        <MenuItem value={index}>
          <Avatar src={avatar} />
        </MenuItem>
      ))}
    </Select>
  </>
);

export default AvatarSelector;
