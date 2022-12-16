import styled from "styled-components";

export default function Habito() {
  return (
    <Container>
      <Title>
        <p>Ler 1 capítulo de livro</p>
        <ion-icon name="trash-outline"></ion-icon>
      </Title>
      <ButtonContainer>
        <button>D</button>
        <button>S</button>
        <button>T</button>
        <button>Q</button>
        <button>Q</button>
        <button>S</button>
        <button>S</button>
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
`;
