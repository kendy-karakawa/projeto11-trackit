import Header from "../../components/Header";
import { ScreenContainer, Title, } from "./style";
import Menu from "../../components/Menu";
import HabitoDia from "../../components/HabitoDia";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/auth";
import axios from "axios";
import { BASE_URL } from "../../constants/urls";
import dayjs from "dayjs";




export default function HojePag(){
  const { dadosUsuario } = useContext(AuthContext)
  const [habitosHoje, setHabitosHoje] = useState(undefined)

  useEffect(()=>{
    const config = {
      headers: { Authorization: `Bearer ${dadosUsuario.token}` },
    };
    const request = axios.get(`${BASE_URL}habits/today`, config)
    request.then((res)=> {setHabitosHoje(res.data)})
    request.catch((erro)=> console.log(erro.message))


  },[])

    return (
        <>
        <Header />
        <ScreenContainer>
          <Title>
            <p>Segunda, 17/05 </p>
            <h1>Nenhum hábito concluído ainda  </h1>
            
          </Title>
          {habitosHoje !== undefined && habitosHoje.map((h)=> (<HabitoDia 
          key={h.id}
          id={h.id}
          name={h.name}
          done={h.done}
          currentSequence={h.currentSequence}
          highestSequence={h.highestSequence}
          
          
          
          />))}
          
          
          
        </ScreenContainer>
        <Menu />
      </>
    )
}