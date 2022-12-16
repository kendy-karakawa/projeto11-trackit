import Header from "../../components/Header";
import { ScreenContainer, Title,Coment } from "./style";
import Menu from "../../components/Menu";
import Habito from "../../components/Habito";
import SetHabito from "../../components/SetHabito";

export default function HabitoPag() {
  return (
    <>
      <Header />
      <ScreenContainer>
        <Title>
          <p>Meus hábitos</p>
          <button> + </button>
        </Title>
        <SetHabito />
        <Habito />
        <Habito />
        <Habito />
        <Coment>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</Coment>
      </ScreenContainer>
      <Menu />
    </>
  );
}

