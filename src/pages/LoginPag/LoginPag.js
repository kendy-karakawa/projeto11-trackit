import Logo from "../../styles/img/logo.png";
import {ScreenContainer, Form} from './style'

export default function LoginPag() {
  return (
    <ScreenContainer>
      <img src={Logo} alt="Logo" />
      <Form>
        <input name="email" type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </Form>
      <p>Não tem uma conta? Cadastre-se!</p>
    </ScreenContainer>
  );
}


