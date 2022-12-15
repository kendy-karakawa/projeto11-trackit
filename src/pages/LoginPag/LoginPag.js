import Logo from "../../styles/img/logo.png";
import { ScreenContainer, Form } from "./style";
import { BASE_URL } from "../../constants/urls";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function LoginPag() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loarding, setLoarding] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function login(e) {
    e.preventDefault();
    setLoarding(true);
    setDisable(true);
    const info = { email, password };
    const promise = axios
      .post(`${BASE_URL}/auth/login`, info)
      .then(resposta)
      .catch(erro);
  }

  function resposta(res) {
    alert("logado com sucesso");
    console.log(res.data)
    //navigate("/hoje");
    setLoarding(false);
    setDisable(false);
  }

  function erro(err) {
    alert(err.response.data.message);
    setLoarding(false);
    setDisable(false);
  }

  return (
    <ScreenContainer>
      <img src={Logo} alt="Logo" />
      <Form onSubmit={login}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={disable}
        />
        <input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          disabled={disable}
        />
        <button type="submit">
          {loarding == true ? (
            <ThreeDots height="40" width="40" color="#ffffff" />
          ) : (
            "Entrar"
          )}
        </button>
      </Form>
      <Link to="/cadastro">
        <p>Não tem uma conta? Cadastre-se!</p>
      </Link>
    </ScreenContainer>
  );
}
