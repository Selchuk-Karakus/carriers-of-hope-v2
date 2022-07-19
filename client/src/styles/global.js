import styled from "styled-components";
import { fonts,colors } from "./variables/variables";

const Styles = styled.div`
    background-color: ${colors.bg1};
   
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     a {
      text-decoration: none;
  }
  :root {
      font-size: 1.1rem;
      font-family:${fonts.roboto};
      }

      @media (min-width: 768px) {
        font-size: 1.1rem)};
      }

      @media (min-width: 1024px) {
        font-size: 1rem};
      }
    }
`;

export default Styles;
