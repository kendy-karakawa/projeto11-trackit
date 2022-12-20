import Header from "../../components/Header";
import { ScreenContainer, Title,Coment } from "./style";
import Menu from "../../components/Menu";
import Habito from "../../components/Habito";
import SetHabito from "../../components/SetHabito";

export default function HistoricoPag(){
    return (
        <>
      <Header data-test="header"/>
      <ScreenContainer>
        <Title>
          <p>Histórico</p>
          
        </Title>
        
        <Coment>Em breve você poderá ver o histórico dos seus hábitos aqui! </Coment>
      </ScreenContainer>
      <Menu data-test="menu"/>
    </>
    )
}