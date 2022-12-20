import Header from "../../components/Header";
import { ScreenContainer, Title, Coment } from "./style";
import Menu from "../../components/Menu";
import Habito from "../../components/Habito";
import SetHabito from "../../components/SetHabito";
import { AuthContext } from "../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function HabitoPag() {
  const [listaHabitos, setListaHabitos] = useState(undefined);
  const [cadastrar, setCadastrar] = useState(false);
  const { dadosUsuario } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const key = localStorage.getItem("key");
  const config = {
    headers: { Authorization: `Bearer ${key || dadosUsuario.token}` },
  };

  useEffect(() => {
    const request = axios.get(`${BASE_URL}/habits`, config);
    request.then((res) => {
      setListaHabitos(res.data);
    });
    request.catch((erro) => console.log(erro.message));
  }, [deletar]);

  function deletar(elemente) {
    if (window.confirm("Deseja deletar este hábito ?")) {
      const request = axios.delete(`${BASE_URL}/habits/${elemente}`, config);
      request.then(() => console.log("deletado"));
    }
  }

  return (
    <>
      <Header />
      <ScreenContainer>
        <Title>
          <p>Meus hábitos</p>
          <button
            onClick={() => setCadastrar(true)}
            data-test="habit-create-btn"
          >+</button>
        </Title>
        {cadastrar === true && (
          <SetHabito
            setCadastrar={setCadastrar}
            name={name}
            setName={setName}
            days={days}
            setDays={setDays}
          />
        )}

        {listaHabitos !== undefined &&
          listaHabitos.map((h) => (
            <Habito
              key={h.id}
              id={h.id}
              name={h.name}
              days={h.days}
              deletar={deletar}
            />
          ))}

        {listaHabitos === undefined && (
          <Coment>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </Coment>
        )}
      </ScreenContainer>
      <Menu />
    </>
  );
}
