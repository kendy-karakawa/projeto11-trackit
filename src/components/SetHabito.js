import { useState } from "react";
import styled from "styled-components";

export default function SetHabito() {
  const [nome, setNome] = useState("");

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
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
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
  button {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #dbdbdb;
    margin-right: 5px;
  }
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
