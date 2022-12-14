import axios from "axios";
import { useContext, useState } from "react";
import styled from "styled-components";
import { BASE_URL } from "../constants/urls";
import { AuthContext } from "../contexts/auth";
import DiaSemana from "./DiaSemana";
import { ThreeDots } from "react-loader-spinner";

export default function SetHabito({ setCadastrar,name, setName, days, setDays }) {
  // const [name, setName] = useState("");
  // const [days, setDays] = useState([]);
  //name, setName, days, setDays
  const diaSemana = [
    { id: 0, name: "D" },
    { id: 1, name: "S" },
    { id: 2, name: "T" },
    { id: 3, name: "Q" },
    { id: 4, name: "Q" },
    { id: 5, name: "S" },
    { id: 6, name: "S" },
  ];
  const { dadosUsuario } = useContext(AuthContext);
  const [disable, setDisable] = useState(false);
  const key = localStorage.getItem("key")
  const config = {
    headers: { Authorization: `Bearer ${key || dadosUsuario.token}` },
  };

  function salvar(event) {
    event.preventDefault();
    setDisable(true);
    const habito = { name, days };
    const promise = axios.post(`${BASE_URL}/habits`, habito, config);
    promise.then(sucesso);
    promise.catch(falha);
  }

  function sucesso(res) {
    setName("");
    setDays([]);
    setCadastrar(false);
    setDisable(false);
  }

  function falha(erro) {
    alert(erro.message);
    setDisable(false);
  }

  function cancelar(){
    
  }

  return (
    <Container onSubmit={salvar} data-test="habit-create-container">
      <InputContainer >
        <input
          type="text"
          placeholder="Nome do hábito"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={disable}
          data-test="habit-name-input"
        />
      </InputContainer>

      <ButtonContainer>
        {diaSemana.map((dia) => (
          <DiaSemana
          
            key={dia.id}
            dia={dia}
            days={days}
            setDays={setDays}
            disable={disable}
          />
        ))}
      </ButtonContainer>

      <ConfirmContainer>
        <Cancelar onClick={()=> setCadastrar(false)} 
        disabled={disable} 
        data-test="habit-create-cancel-btn">Cancelar</Cancelar>

        <Confirm  type="submit" disabled={disable} data-test="habit-create-save-btn">
          {disable == true ? (
            <ThreeDots height="40" width="40" color="#ffffff" />
          ) : (
            "Salvar"
          )}
        </Confirm>
      </ConfirmContainer>
    </Container>
  );
}




const Container = styled.form`
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
    &::placeholder {
      color: #dbdbdb;
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

`;

const Confirm = styled.button`
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
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cancelar = styled.button`
    width: 84px;
    height: 35px;
    background: #fff;
    border: none;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52b6ff;
    margin-right: 25px;
    
`
