import styled from "styled-components";
import { Box } from "@mui/material";
import { colors } from "../colors";

const ChatBoxElement = styled(Box)`
  bottom: 0;
  left: 0;
  padding: 10px 0;
  min-height: 8vh;
  width: 100vw;
  position: fixed;
  display: flex;
  background-color: ${colors.GRAY};

  .chatInput {
    min-height: 100%;
    width: 75%;
    margin-left: 10px;
    border-radius: 30px;
    font-size: 1.5rem;
    padding: 0 3%;
    background-color: white;
  }

  .sendButton {
    width: 50px;
    height: 50px;
    margin-left: 20px;
    align-self: center;
    background: ${colors.GREEN_BLUE_LINEAR_GRADIENT};
  }
`;

export default ChatBoxElement;
