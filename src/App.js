import styled from "styled-components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPag from "./pages/LoginPag/LoginPag"
import CadastroPag from "./pages/CadastroPag/CadastroPag"
import HojePag from "./pages/HojePag/HojePag"
import HistoricoPag from "./pages/HistoricoPag/HistoricoPag"
import HabitoPag from "./pages/HabitoPag/HabitoPag"
import AuthProvider from "./contexts/auth"


export default function App(){
  return (
    <AuthProvider>
    <BrowserRouter >
    <Container>
    <Routes>
   
     <Route path="/" element={<LoginPag />}/>
     <Route path="/cadastro" element={<CadastroPag />}/>
     <Route path="/habitos" element={<HabitoPag />}/>
     <Route path="/hoje" element={<HojePag />}/>
     <Route path="/historicos" element={<HistoricoPag />}/>
    
    
   
    </Routes>
    </Container>
    </BrowserRouter>
    </AuthProvider>
  )
}

const Container = styled.div`
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-color:#E5E5E5;
`
