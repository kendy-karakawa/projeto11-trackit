import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/auth";

export default function Menu() {
  const {porcentagem} = useContext(AuthContext)
  return (
    <MenuContainer data-test="menu">
      <Link to="/habitos" data-test="habit-link">
        <p>Hábitos</p>
      </Link>
      
        <div >
        <Link to="/hoje" data-test="today">
          <CircularProgressbar
            value={porcentagem}
            text="Hoje"
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
          </Link>
        </div>
      
      <Link to="/historicos" data-test="history-link">
        <p>Histórico</p>
      </Link>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 400px;
  height: 70px;
  background: #ffffff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  z-index: 1;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52b6ff;
  }
  div {
    width: 150px;
    height: 150px;
    padding: 10px;
  }
  a{
    text-decoration:none;
  }
`;
