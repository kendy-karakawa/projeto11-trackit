import styled from "styled-components";

export default function HabitoDia({id, name, done, currentSequence, highestSequence}) {
  return (
    <Container>
      <LeftContainer>
        <h1>{name}</h1>
        <h2>Sequência atual: {currentSequence} dias</h2>
        <h2> Seu recorde: {highestSequence} dias</h2>
      </LeftContainer>

      <RigthContainer>
      <ion-icon name="checkbox"></ion-icon>
      </RigthContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 360px;
  height: 94px;
  background: #ffffff;
  border-radius: 5px;
  padding: 15px 15px 15px 15px;
  margin-top: 10px;
  display:flex;
  justify-content:space-between;
  align-items:center;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 10px;

  h1 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 25px;
    color: #666666;
    margin-bottom: 8px;
  }
  h2 {
    font-family: "Lexend Deca";
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;

    color: #666666;
  }
`;

const RigthContainer = styled.div`
  ion-icon {
    width: 80px;
    height: 80px;
    color: #ebebeb;
    
  }
`;
