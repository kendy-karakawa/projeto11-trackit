import { useState } from "react";
import styled from "styled-components";

const SELECT = { background: "#CFCFCF", text: "#FFFFFF", border: "#CFCFCF" };
const UNSELECT = { background: "#FFFFFF", text: "#DBDBDB", border: "#DBDBDB" };

export default function DiaSemana({ dia, days, setDays }) {
  const id = dia.id;
  const name = dia.name;
  const [cor, setCor] = useState(UNSELECT);

  function selecionarDiaSemana() {
    if (!days.includes(id)) {
      setDays([...days, id]);
      setCor(SELECT);
    } else {
      const newList = days.filter((d) => d !== id);
      setDays(newList);
      setCor(UNSELECT);
    }
  }

  
  return (
    <>
      <Button type="button" onClick={selecionarDiaSemana} cor={cor} data-test="habit-day">
        {name}
      </Button>
    </>
  );
}

const Button = styled.button`
  width: 30px;
  height: 30px;
  background: ${(props) => props.cor.background};
  border: 1px solid ${(props) => props.cor.border};
  border-radius: 5px;
  font-family: "Lexend Deca";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  color: ${(props) => props.cor.text};
  margin-right: 5px;
`;
