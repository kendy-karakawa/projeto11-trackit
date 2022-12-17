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
  totalHabitosDia,
  
}) {
  const { concluidos, setConcluidos, setPorcentagem } = useContext(AuthContext);
  const [ corSequencia, setCorSequencia] = useState(done == false ? false : true)
  const [ corRecorede, setCorRecorde] = useState(done == true && currentSequence == highestSequence ? true : false)

 
  function concluiuHabito() {
    let listaConcluido = [...concluidos];
    if (!listaConcluido.includes(id)) {
      listaConcluido = [...concluidos, id];
      marcarHabito(id);
      setCorSequencia(true)

      if(currentSequence == highestSequence){
        setCorRecorde(true)
      } else {
        setCorRecorde(false)
      }

    } else {
      const newList = listaConcluido.filter((i) => i !== id);
      listaConcluido = newList;
      desmarcarHabito(id);
      setCorSequencia(false)
      setCorRecorde(false)
    }

    
    setConcluidos(listaConcluido);
    setPorcentagem(Math.round((listaConcluido.length / totalHabitosDia) * 100));
  }

  return (
    <Container data-test="today-habit-container">
      <LeftContainer>
        <h1 data-test="today-habit-name">{name}</h1>
        <h2 data-test="today-habit-sequence">Sequência atual: {
           corSequencia == false ?
          <Sequencia cor={'#666666'}> {currentSequence} dias</Sequencia> :
          <Sequencia cor={'#8FC549'}> {currentSequence} dias</Sequencia>} </h2>
        <h2 data-test="today-habit-record"> Seu recorde: {
           corRecorede == false ?
          <Record cor={'#666666'}> {highestSequence} dias</Record> : 
          <Record cor={'#8FC549'}> {highestSequence} dias</Record>} </h2>
      </LeftContainer>

      <div>
        {!concluidos.includes(id) ? (
          <Button buttonColor={UNCHECK} onClick={concluiuHabito} data-test="today-habit-check-btn">
            <img src={Vector} alt="vector" />
          </Button>
        ) : (
          <Button buttonColor={CHECK} onClick={concluiuHabito} data-test="today-habit-check-btn">
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

const Sequencia = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => props.cor};
`;

const Record = styled.span`
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${(props) => props.cor};
`;

const Button = styled.div`
  width: 80px;
  height: 80px;
  background-color: ${(props) => props.buttonColor.back};
  border: 1px solid ${(props) => props.buttonColor.border};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
