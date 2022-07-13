import styled from "styled-components";
import { colors } from "./variables/variables";

export const Styles = styled.div`
 
.card-container{
   display: flex;
   flex-wrap: wrap;
   justify-content: center;

   
     @media (min-width: 950px) {
       margin: 1.5rem 1rem;
       width: 520px;
       height: 380px;      
     }
     @media (min-width: 1150px) {
       margin: 2rem 1.5rem;
       width: 610px;

     }

     &:hover {
       background-color: #e4e2e2;
       color: #1B1A17;
     }

     
       
     

     .card-body {
       padding-bottom: 1rem;
       padding-top:5px;
     
     .title{
       font-size: 1rem;
       font-weight: 700;
       margin-bottom: 0;
      
       @media (min-width: 950px) {
       font-size: 1.1rem;
       }
       
     }
     p{
       margin-bottom: 0;
     }
    }
    
   }
 }
`;
