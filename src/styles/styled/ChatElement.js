import styled from "styled-components";

const Chat = styled.div`
  .messagesArea {
    height: 90vh;
    padding: 2vh 10vw;
    display: flex;
    overflow-y: scroll;
    box-sizing: border-box;
    flex-direction: column-reverse;
  }

  @media (max-width: 768px) {
    .messagesArea {
      padding: 2vh 4vw;
    }
  }
`;

export default Chat;
