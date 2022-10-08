import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"


export default function MoviePage(props){
    

    const { title, posterURL, movie, setMovie, setMovieList, movieList } = props
    const { id } = useParams()
    const indice = id -1 
    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${id}/showtimes`)
    
    promise.then(response=> setMovie(response.data.days))
}, [])

    return(
        <>
        <Title>
            Selecione o horário
            </Title>
            {movie.map ((m) =>
            <ContainerSessions>
            <p>{m.weekday} - {m.date}</p>
            {m.showtimes.map((f)=>
                <Botao>
                    <Link to="/assentos/1">{f.name}
                    </Link></Botao>
                )}
                
                </ContainerSessions>)}
           <Footer>
            <img src={movieList[indice].posterURL}/>
            
                <p>{movieList[indice].title}</p>
                
            </Footer>
            
            </>

    )
}


const Title = styled.div`
    width: 374px;
    height: 110px;
    left: 0px;
    top: 67px;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 28px;

        letter-spacing: 0.04em;
        color: #293845;}
`


const Footer = styled.footer`
    width: 100%;
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    align-items: center;
    position:fixed;
    z-index:99;
    img{
        width: 48px;
height: 72px;
    }
    p{
        width: 169px;
        height: 40px;
        left: 88px;
        bottom: 39px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`

const ContainerSessions = styled.div`
    width: 241px;
    height: 35px;
    margin-left: 24px;
    top: 170px;
    display: flex;
    flex-direction: column;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
    
`

const Botao = styled.button`

        width: 83px;
        height: 43px;
        left: 23px;
        margin-top:22px;
        background: #E8833A;
        border-radius: 3px;`
