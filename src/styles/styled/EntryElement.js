import styled from "styled-components";
import { Container } from "@mui/material";
import { colors } from "../colors";

const EntryElement = styled(Container)`
  && {
    height: 100vh;
    width: 100vw;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${colors.LIGHT_ORANGE};
  }

  h1 {
    text-align: center;
  }

  .textInput {
    input {
      text-align: center;
    }
  }

  .submitButton {
    margin-top: 20px;
    box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.5);
    background: ${colors.GREEN_BLUE_LINEAR_GRADIENT};
    z-index: 1;
  }

  .spongeBobImage {
    position: absolute;
    width: 350px;
    bottom: 0;
  }
`;

export default EntryElement;
