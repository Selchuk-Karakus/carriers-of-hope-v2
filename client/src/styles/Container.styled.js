import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  position: relative;
`;

export const StyledNav = styled.nav`
  height: 90px;
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  position: relative;
  /* padding: 0.5rem 0rem; */
  background-color: hsl(0, 0%, 4%);
  color: black;
  z-index: 1;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;

  p {
    color: white;
    font-weight: bold;
    text-transform: uppercase;
    padding: 30px;
  }

  /*
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
/* box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px; */
`;

export const Heading = styled.h1`
  font-size: 3rem;
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

  img {
    display: block;
    width: 40%;
    max-width: 100%;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
    margin-bottom: 50px;
  }
`;

export const StyledRequestForm = styled.div`
  display: flex;
`;

export const StyledFooter = styled.footer`
  background-color: hsl(0, 0%, 4%);
  color: white;
  padding: 30px;
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 90px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
`;

export const Oops = styled.div`
  img {
    width: 100%;
  }
`;

export const StyledUserLogin = styled.div`
  form {
    display: flex;
    flex-direction: column;

    align-items: center;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 30px;
  max-width: 300px;
  gap: 20px;
  margin: 0 auto;
`;
