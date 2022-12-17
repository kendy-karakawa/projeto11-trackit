import Header from "../../components/Header";
import { ScreenContainer, Title, Subtitle } from "./style";
import Menu from "../../components/Menu";
import HabitoDia from "../../components/HabitoDia";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import dayjs from "dayjs";




export default function HojePag(){
  const { dadosUsuario, concluidos, setConcluidos, porcentagem, setPorcentagem} = useContext(AuthContext)
  const [habitosHoje, setHabitosHoje] = useState(undefined)
  const [totalHabitosDia, setTotalHabitosDia] = useState(0)
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzIxMiwiaWF0IjoxNjcxMjg0OTgwfQ.Zu7BjycIieoYs5Z5XW9WG4vDa1IMSr4aZFqoWrMF-8c"
  
  useEffect(()=>{
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // dadosUsuario.token
    };
    const request = axios.get(`${BASE_URL}habits/today`, config)
    request.then(resposta)
    request.catch((erro)=> console.log(erro.message))
  },[])

  function resposta(res){
    const lista = res.data
    const listaConcluidos = []
    setHabitosHoje(res.data)
    console.log(res.data)
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
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // dadosUsuario.token
    };
    const send = axios
    .post(`${BASE_URL}/habits/${id}/check`,{}, config)
    //.then((res) => console.log(res.status))
    .catch((erro) => console.log(erro.message))
  }

  function desmarcarHabito(id){
    const config = {
      headers: { Authorization: `Bearer ${token}` }, // dadosUsuario.token
    };
    const send = axios
    .post(`${BASE_URL}/habits/${id}/uncheck`,{}, config)
    //.then((res) => console.log(res.status))
    .catch((erro) => console.log(erro.message))
  }

  //Math.round((concluidos.length/totalHabitosDia)*100)

    return (
        <>
        <Header />
        <ScreenContainer>
          <Title>
            <p>Segunda, 17/05 </p>
            {concluidos.length/totalHabitosDia == 0 ? 
            <Subtitle textColor={"#BABABA"}> Nenhum hábito concluído ainda </Subtitle> :
            <Subtitle textColor={"#8FC549"}> {porcentagem}% dos hábitos concluídos</Subtitle>
            
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