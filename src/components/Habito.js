import styled from "styled-components";

export default function Habito({ id, name, days, deletar }) {
  return (
    <Container data-test="habit-container">
      <Title>
        <p data-test="habit-name">{name}</p>
        <ion-icon onClick={() => deletar(id)} name="trash-outline" data-test="habit-delete-btn"></ion-icon>
      </Title>
      <ButtonContainer>
        <button data-test="habit-day" disabled={days.includes(1) && true}>D</button>
        <button data-test="habit-day" disabled={days.includes(2) && true}>S</button>
        <button data-test="habit-day" disabled={days.includes(3) && true}>T</button>
        <button data-test="habit-day" disabled={days.includes(4) && true}>Q</button>
        <button data-test="habit-day" disabled={days.includes(5) && true}>Q</button>
        <button data-test="habit-day" disabled={days.includes(6) && true}>S</button>
        <button data-test="habit-day" disabled={days.includes(7) && true}>S</button>
      </ButtonContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  height: 91px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 15px 5px 15px;
  margin-top: 10px;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;

  p {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #666666;
  }
  ion-icon {
    height: 15px;
    width: 13px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  button {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border: 1px solid #d5d5d5;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #dbdbdb;
    margin-right: 5px;
  }
  button:disabled {
    width: 30px;
    height: 30px;
    background: #cfcfcf;
    border: 1px solid #cfcfcf;
    border-radius: 5px;
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 19.976px;
    line-height: 25px;
    color: #ffffff;
    margin-right: 5px;
  }
`;
