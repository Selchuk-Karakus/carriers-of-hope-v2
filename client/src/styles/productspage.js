import styled from "styled-components";
import { colors } from "./variables/variables";

export const Styles = styled.div`
  .main-content {
    margin-top:2rem;
    padding: 1rem;
    // width: 100%;
    background-color:  ${colors.bg};
    a {
      text-decoration: none;
    }
    @media (min-width: 800px) {
      width: 750px;
      margin: 0 auto;
    }
    @media (min-width: 1250px) {
      width: 1150px;
    }
    .back-button{
      display:flex;
      margin-left:1rem;
      background-color:transparent;
      border:none;
      
      .icon{
        margin-top:1.2px;
      }
      
    }

    .card-container{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      .product-card {
        background-color: ${colors.bg};
        padding-bottom: 1.5rem;
        width: 177px;
        height: 213px;
        color: ${colors.text1};
        box-shadow: #1B1A17;
        margin: 1rem 0.4rem;

        @media (min-width: 605px) {
          width: 190px;
          height: 220px;
          margin:2rem;        
        }

        @media (min-width: 950px) {
          margin: 1rem;
          width: 200px;
          height: 240px;    
        }
        @media (min-width: 1250px) {
          margin: 2rem 1rem;
          width: 220px;
          height: 260px;
        }

        &:hover {
          background-color: #e4e2e2;
          color: #1B1A17;
        }
        
        .image-container {
          width:100%;

          img{
            border-radius:16px;
            width:100%;
            height: 160px;
            object-fit:cover;
            @media (min-width: 950px) {
             
              height: 200px;
                
            }
          }
        }        

        .card-text {
          padding-bottom: 0.5rem;
          padding-left:0.5rem;
        
          .p-name{
            text-decoration:none;
            font-size: 0.9rem;
            font-weight: 500;
            margin-bottom: 0;
            color: ${colors.text1};
            @media (min-width: 950px) {
            font-size: 1rem;
            }
            
            }
          .p-category{
            font-size: 0.8rem;
            font-weight: 500;
            margin-bottom: 0;
            color: ${colors.text1};
          
            @media (min-width: 950px) {
            font-size: 0.9rem;
            }
            
          }

        }
        
       
      }
    }


    
  }
`;
