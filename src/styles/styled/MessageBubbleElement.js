import styled from "styled-components";
import { colors } from "../colors";

const MessageBubbleElement = styled.div`
  margin-bottom: 25px;
  display: flex;
  position: relative;
  flex-direction: ${({ user }) => (user ? "row-reverse" : "row")};

  .nickname {
    margin: 0 0 10px 60px;
    font-weight: bold;
  }

  .flexContainer {
    display: flex;
    flex-direction: ${({ user }) => (user ? "row-reverse" : "row")};

    .avatar {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }

    .message {
      padding: 15px;
      min-width: 5%;
      max-width: 50vw;
      border-radius: 15px;
      white-space: pre-wrap;
      overflow-wrap: break-word;
      background: ${({ user }) => (user ? colors.GREEN_BLUE_LINEAR_GRADIENT : colors.LIGHT_GRAY)};
    }

    .time {
      margin: 0 10px 0 10px;
      align-self: flex-end;
      font-size: 0.6rem;
    }
  }
`;

export default MessageBubbleElement;
