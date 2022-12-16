import styled from "styled-components";
import Logo2 from "../../src/styles/img/logo2.png";
import { useContext } from "react";
import { AuthContext } from "../contexts/auth";


export default function Header() {
  const {dadosUsuario} = useContext(AuthContext)

  return (
    <HeaderContainer>
      <img src={Logo2} alt="logo" />
      <Foto src={dadosUsuario.image} alt="Foto" />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  width: 400px;
  height: 70px;
  background: #126ba5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Foto = styled.img`
  width: 51px;
  height: 51px;
  border-radius: 98.5px;
`;
