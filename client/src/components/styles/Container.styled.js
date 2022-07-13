import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const StyledNav = styled.nav`
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0.5rem 0rem;
  background-color: hsl(0, 0%, 4%);
  color: black;
  z-index: 1;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  /*
  box-sizing: border-box;
  padding: 30px;

 
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px,
    rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px,
    rgba(0, 0, 0, 0.07) 0px 16px 16px; */

  /* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
`;

export const Heading = styled.h1`
  font-size: 4rem;
`;

export const Text = styled.p`
  width: 60%;
`;

export const StyledHomepage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const StyledRequestForm = styled.div`
  display: flex;
`;

export const StyledFooter = styled.footer`
  background-color: hsl(0, 0%, 4%);
  color: white;
  padding: 30px;
  position: fixed;
  bottom: 0;
  width: 100%;
  cursor: pointer;
`;
