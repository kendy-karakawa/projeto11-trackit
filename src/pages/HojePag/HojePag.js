import Header from "../../components/Header";
import { ScreenContainer, Title, Subtitle } from "./style";
import Menu from "../../components/Menu";
import HabitoDia from "../../components/HabitoDia";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import dayjs from "dayjs";
import 'dayjs/locale/pt-br';




export default function HojePag(){
  const { dadosUsuario, concluidos, setConcluidos, porcentagem, setPorcentagem} = useContext(AuthContext)
  const [habitosHoje, setHabitosHoje] = useState(undefined)
  const [totalHabitosDia, setTotalHabitosDia] = useState(0)
  const key = localStorage.getItem("key")
  const config = {
    headers: { Authorization: `Bearer ${key || dadosUsuario.token}` },
  };
  
  require('dayjs/locale/pt-br');
  const dayjs = require('dayjs');
  const data = dayjs().locale("pt-br").format("dddd DD/MM");

  

  const [refresh, setRefresh] = useState(true)
  
  useEffect(()=>{
    const request = axios.get(`${BASE_URL}/habits/today`, config)
    request.then(resposta)
    request.catch((erro)=> console.log(erro.message))
    setRefresh(true)
  },[refresh])

  function resposta(res){
    const lista = res.data
    const listaConcluidos = []
    setHabitosHoje(res.data)
    //console.log(res.data)
    setTotalHabitosDia(lista.length)

    for (let i=0; i<lista.length; i++){
      if(lista[i].done == true){
        listaConcluidos.push(lista[i].id)
      }
    }
    setConcluidos(listaConcluidos)
    setPorcentagem(Math.round((listaConcluidos.length/lista.length)*100))
  }
  

  function marcarHabito(id){
    const send = axios
    .post(`${BASE_URL}/habits/${id}/check`,{}, config)
    .then((res) => (setRefresh(false)))
    .catch((erro) => console.log(erro.message))
  }

  function desmarcarHabito(id){
    const send = axios
    .post(`${BASE_URL}/habits/${id}/uncheck`,{}, config)
    .then((res) => (setRefresh(false)))
    .catch((erro) => console.log(erro.message))
  }

  

  //Math.round((concluidos.length/totalHabitosDia)*100)

    return (
        <>
        <Header />
        <ScreenContainer>
          <Title>
            <p data-test="today">{data}</p>
            {!porcentagem  ? 
            <Subtitle textColor={"#BABABA"} data-test="today-counter"> Nenhum hábito concluído ainda </Subtitle> :
            <Subtitle textColor={"#8FC549"} data-test="today-counter"> {porcentagem}% dos hábitos concluídos</Subtitle>
            
            }
            
          </Title>
          {habitosHoje !== undefined && habitosHoje.map((h)=> (<HabitoDia 
          key={h.id}
          id={h.id}
          name={h.name}
          done={h.done}
          currentSequence={h.currentSequence}
          highestSequence={h.highestSequence}
          marcarHabito={marcarHabito}
          desmarcarHabito={desmarcarHabito}
          totalHabitosDia={totalHabitosDia}
         
          
          
          
          />))}
          
          
          
        </ScreenContainer>
        <Menu />
      </>
    )
}