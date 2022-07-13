import styled from "styled-components";
import { colors } from "./variables/variables";

export const Styles = styled.div`
  .main-content {
    padding: 1rem;
    max-width: 100%;
    background-color:  ${colors.bg};
    margin: 0 auto;

    @media (min-width: 950px) {
      max-width: 1170px;
    }
    @media (min-width: 1150px) {
      max-width: 1600px;
    }
    
    
  }
`;
