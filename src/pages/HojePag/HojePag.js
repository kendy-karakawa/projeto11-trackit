import Header from "../../components/Header";
import { ScreenContainer, Title, } from "./style";
import Menu from "../../components/Menu";
import HabitoDia from "../../components/HabitoDia";



export default function HojePag(){
    return (
        <>
        <Header />
        <ScreenContainer>
          <Title>
            <p>Segunda, 17/05 </p>
            <h1>Nenhum hábito concluído ainda  </h1>
            
          </Title>
          <HabitoDia />
          
          
        </ScreenContainer>
        <Menu />
      </>
    )
}