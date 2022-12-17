import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { AuthContext } from "../contexts/auth";
import Vector from "../styles/img/Vector.png";

const CHECK = { back: "#8FC549", border: "#8FC549" };
const UNCHECK = { back: "#EBEBEB", border: "#E7E7E7" };

export default function HabitoDia({
  id,
  name,
  done,
  currentSequence,
  highestSequence,
  marcarHabito,
  desmarcarHabito,
}) {
  const { concluidos, setConcluidos, } = useContext(AuthContext);

  function concluiuHabito() {
    if (!concluidos.includes(id)) {
      setConcluidos([...concluidos, id]);
      marcarHabito(id);
    } else {
      const newList = concluidos.filter((i) => i !== id);
      setConcluidos(newList);
      desmarcarHabito(id);
    }
  }

  return (
    <Container>
      <LeftContainer>
        <h1>{name}</h1>
        <h2>Sequência atual: {currentSequence} dias</h2>
        <h2> Seu recorde: {highestSequence} dias</h2>
      </LeftContainer>

      <div>
        {!concluidos.includes(id) ? (
          <Button buttonColor={UNCHECK} onClick={concluiuHabito}>
            <img src={Vector} alt="vector" />
          </Button>
        ) : (
          <Button buttonColor={CHECK} onClick={concluiuHabito}>
            <img src={Vector} alt="vector" />
          </Button>
        )}
      </div>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 15px 15px 15px;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }
`;

const Button = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props)=> props.buttonColor.back};
  border: 1px solid ${(props)=> props.buttonColor.border};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
