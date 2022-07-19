import styled from "styled-components";
import { colors } from "../styles/variables/variables";

export const Styles = styled.div`
    background-color: ${colors.bg1};
   .product-dashboard{
      margin: 2rem;
      overflow-x:auto;
      table {
         
         border: 1px solid #ccc;
         border-collapse: collapse;
         margin: 0;
         padding: 0;
         width: 100%;
         thead{
            background-color: ${colors.bg2};

         }
         tr {
            background-color: ${colors.bg1};
            border: 1px solid #ddd;
            padding: .35em;

            th,
            td {
               padding: .625em;
               text-align: center;
            }

            th {
               font-size: .85em;
               letter-spacing: .1em;
               text-transform: uppercase;

               @media (min-width: 740px) {
                  font-size: .985em;
 
                 }
               
            }
            td{
               font-size: .85em;

               @media (min-width: 740px) {
                 font-size: .985em;

                }
            }
            .actions{
               span{
                  cursor:pointer;
                  font-size: 1.1em;
                  @media (min-width: 740px) {
                     font-size: 1.3em;;
    
                    }
                  
               }
               .edit-btn{
                  :hover{
                     color:${colors.green}
                  }
               }
               .delete-btn{
                  margin-left:1rem;
                  :hover{
                     color:${colors.red}
                  }
               }
            }

         }
       

      }
   
   
   }
  
`;

