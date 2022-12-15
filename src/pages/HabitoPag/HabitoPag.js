import Header from "../../components/Header";
import styled from "styled-components";
import Menu from "../../components/Menu";

export default function HabitoPag(){
    return (
        <ScreenContainer>
        <Header />
        <Menu />
        </ScreenContainer>
    )
}

const ScreenContainer = styled.div`
  width: 400px;
  min-width: 400px;
  min-height: 100vh;
  background-color: #F2F2F2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  ` 