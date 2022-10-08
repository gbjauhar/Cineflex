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
    const [movieList, setMovieList] = useState([])
    const [movie, setMovie] = useState([])

    return (
        <BrowserRouter>
            <GlobalStyle />
            <Header>
                <p>CINEFLEX</p>
                </Header>
            <Routes>
                <Route path="/" 
                element={<MainPage 
                movie={movie}
                setMovie={setMovie} 
                movieList={movieList}
                setMovieList={setMovieList}/>} />
                
                <Route path="/sessoes/:id" 
                element={<MoviePage 
                setDays={setDays} 
                setDate={setDate} 
                setHour={setHour} 
                setName={setName} 
                name={name} 
                days={days} 
                date={date}
                movie={movie}
                setMovie={setMovie}
                movieList={movieList}
                setMovieList={setMovieList}/>}/>
                
                <Route path="/assentos/:id"
                element={<SessionPage 
                setInputName={setInputName} 
                inputName={inputName} 
                setInputCPF={setInputCPF} 
                inputCPF={inputCPF} />}/>
               
                <Route path="/sucesso" 
                element={<Success 
                inputName={inputName} 
                inputCPF={inputCPF} 
                hour={hour} 
                date={date} 
                name={name}/>}/>
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
    justify-content: center;
    position:fixed;
    top:0;
    p{
        font-family: 'Roboto';
        font-size: 34px;
        color: #E8833A;}
`