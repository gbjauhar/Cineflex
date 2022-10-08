import GlobalStyle from "./GlobalStyle";
import MainPage from "./MainPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./MoviePage";
import styled from "styled-components";
import SessionPage from "./SessionPage";
import Success from "./Success";
import { useState } from "react";

export default function App() {
    const [days, setDays] = useState([])
    const [date, setDate] = useState([])
    const [hour, setHour] = useState([])
    const [inputName, setInputName] = useState("")
    const [inputCPF, setInputCPF] = useState("")
    const [name, setName] = useState("")
    const [img, setImg] = useState([])
    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header>
                <p>CINEFLEX</p>
                </Header>
            <Routes>
                <Route path="/" element={<MainPage setImg={setImg} img={img} />} />
                <Route path="/sessoes/1" element={<MoviePage setDays={setDays} setDate={setDate} setHour={setHour} setName={setName} name={name} img={img} days={days} date={date}/>}/>
                <Route path="/assentos/1" element={<SessionPage setInputName={setInputName} inputName={inputName} setInputCPF={setInputCPF} inputCPF={inputCPF} />}/>
                <Route path="/sucesso" element={<Success inputName={inputName} inputCPF={inputCPF} hour={hour} date={date} name={name}/>}/>
            </Routes>
        </BrowserRouter>
    )
}

const Header = styled.header`
    width: 100%;
    height: 67px;
    background: #C3CFD9;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    position:fixed;
    z-index:100;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 34px;
        line-height: 40px;
        color: #E8833A;}
`