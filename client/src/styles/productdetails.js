import styled from "styled-components";
import { colors } from "./variables/variables";

export const Styles = styled.div`
  .detail-content {
    padding: 1rem 2rem;
    width: 100%;
    background-color:  ${colors.bg};
    margin-top:3rem;

    @media (min-width: 800px) {
      width: 750px;
      margin: 0 auto;
    }
    @media (min-width: 1250px) {
      width: 1150px;
    }

    
}
`;
