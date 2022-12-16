import styled from "styled-components";

export const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 90px;
  padding-bottom: 90px;
`;

export const Title = styled.div`
  width: 400px;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126ba5;
  }
  button {
    width: 40px;
    height: 35px;
    background: #52b6ff;
    border-radius: 4.63636px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 26px;
    line-height: 34px;
    text-align: center;
    font-weight: 400;
    color: #ffffff;
    display:flex;
    justify-content:center;
    align-items:center;
  }
`;

export const Coment = styled.div`
width: 400px;
padding: 10px 20px;
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 17.976px;
line-height: 22px;
color: #666666;

`
