import styled from "styled-components";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

export default function Menu() {
  const [percentage, setPercentage] = useState(40);
  return (
    <MenuContainer>
      <p>Hábitos</p>
      <div>
        <CircularProgressbar
          value={percentage}
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
      </div>
      <p>Histórico</p>
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
`;
