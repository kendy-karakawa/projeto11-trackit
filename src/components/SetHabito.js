import { useState } from "react";
import styled from "styled-components";
import DiaSemana from "./DiaSemana";

export default function SetHabito() {
  const [nome, setNome] = useState("");
  const [days, setDays ] = useState([])
  const diaSemana = [{id:1, name:'S'},{id:2, name:'T'},{id:3, name:'Q'},{id:4, name:'Q'},{id:5, name:'S'},{id:6, name:'S'},{id:7, name:'D'}]

  console.log(days)

  // function selectDays(value){
  //   setDays([...days, value])
  // }

  return (
    <Container>
      <InputContainer>
        <input
          type="text"
          placeholder="Nome do hábito"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
        />
      </InputContainer>

      <ButtonContainer>
       
        {diaSemana.map((dia)=> <DiaSemana key={dia.id} dia={dia} days={days} setDays={setDays}/>)}
      
      </ButtonContainer>

      <ConfirmContainer>
        <p>Cancelar</p>
        <button>Salvar</button>
      </ConfirmContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  height: 180px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 15px 5px 15px;
  margin-top: 10px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  input {
    width: 340px;
    height: 45px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    &::placeholder{
        color: #DBDBDB
    }
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 10px;
 
`;

const ConfirmContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    margin-right: 25px;
  }
  button {
    width: 84px;
    height: 35px;
    background: #52b6ff;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #ffffff;
  }
`;
