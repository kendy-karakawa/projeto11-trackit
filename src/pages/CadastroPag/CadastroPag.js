import Logo from "../../styles/img/logo.png";
import { ScreenContainer, Form } from "./style";
import { BASE_URL } from "../../constants/urls";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";

export default function CadastroPag() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [loarding, setLoarding] = useState(false);
  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();

  function createaccont(e) {
    e.preventDefault();
    setLoarding(true);
    setDisable(true);
    const info = { email, name, image, password };
    const promise = axios
      .post(`${BASE_URL}/auth/sign-up`, info)
      .then(resposta)
      .catch(erro);
  }

  function resposta() {
    navigate("/");
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

      <Form onSubmit={createaccont}>
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
        <input
          type="name"
          placeholder="nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={disable}
        />
        <input
          type="url"
          placeholder="foto"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
          disabled={disable}
        />
        <button type="submit" disabled={disable}>
          {loarding == true ? (
            <ThreeDots height="40" width="40" color="#ffffff" />
          ) : (
            "Cadastrar"
          )}
        </button>
      </Form>
      <Link to="/">
        <p>Já tem uma conta? Faça login!</p>
      </Link>
    </ScreenContainer>
  );
}
