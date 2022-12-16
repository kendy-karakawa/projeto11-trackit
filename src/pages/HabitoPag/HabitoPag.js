import Header from "../../components/Header";
import { ScreenContainer, Title,Coment } from "./style";
import Menu from "../../components/Menu";
import Habito from "../../components/Habito";
import SetHabito from "../../components/SetHabito";
import { AuthContext } from "../../contexts/auth";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";

export default function HabitoPag() {
  const { listaHabitos, setListaHabitos } = useState(undefined)
  const [cadastrar, setCadastrar] = useState(false)
  const {dadosUsuario} = useContext(AuthContext)
  const [comment, setComment] = useState(false)

  useEffect(()=>{
    const config = {
      headers: {"Authorization": `Bearer ${dadosUsuario.token}`}
    }
    const request = axios.get(`${BASE_URL}/habits`, config)
    request.then((res) => setListaHabitos(res.data));
    request.catch((erro) => console.log(erro.data));
  
  },[])

  
  
  return (
    <>
      <Header />
      <ScreenContainer>
        <Title>
          <p>Meus hábitos</p>
          <button onClick={()=> (setCadastrar(true))}> + </button>
        </Title>
        {cadastrar === true && <SetHabito />}
        
        {listaHabitos !== undefined && listaHabitos.map((h)=> (
        <Habito 
        key={h.id}
        nome={h.name}
        days={h.days}
        />) )}
        
        {listaHabitos === undefined && <Coment>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Coment> }
        
        
      </ScreenContainer>
      <Menu />
    </>
  );
}

