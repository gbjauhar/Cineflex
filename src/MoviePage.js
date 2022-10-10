import styled from "styled-components"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import { useEffect } from "react"


export default function MoviePage(props){
    

    const { movie, setMovie, movieList } = props
    const { id } = useParams()
    const indice = id -1 
    useEffect(() => {
    const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`)
    
    promise.then(response=> setMovie(response.data.days))
    promise.catch(erro => {
        console.log(erro.status);
    });
}, [id, setMovie])

    return(
        <Container>
        <p>
            Selecione o horário
            </p>
            {movie.map ((m) =>
            <ContainerSessions key={m.id}>
            <p>{m.weekday} - {m.date}</p>
            <ContainerButtons>
            {m.showtimes.map((f)=>
                <Button key={f.id}>
                    <Link to={`/assentos/${f.id}`}>
                        <h1>{f.name}</h1>
                    </Link>
                </Button>
                )}
                </ContainerButtons>
                
                </ContainerSessions>)}
           <Footer>
            <ImageContainer>
            <img src={movieList[indice].posterURL} alt={movieList[indice].title}/>
            </ImageContainer>
            
                <p>{movieList[indice].title}</p>
                
            </Footer>
            
            </Container>

    )
}

const Container = styled.div`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
        font-family: 'Roboto';
        font-size: 24px;
        color: #293845;}
`

const ContainerSessions = styled.div`
    display: flex;
    margin-bottom: 20px;
    justify-content: center;
    flex-direction: column;
    p{
        font-family: 'Roboto';
        font-style: normal;
        font-size: 20px;
    }
    
`

const ContainerButtons = styled.div`
display: flex;
margin-top: 20px;
justify-content: center;
`

const Button = styled.button`
        width: 83px;
        height: 43px;
        background-color: #E8833A;
        border-radius: 3px;
        font-family: 'Roboto';
        font-size: 18px;
        color: white;
        margin-right: 10px;
        overflow-y: scroll;
        h1{
            color:white;
        }
`

const Footer = styled.footer`
    display: flex;
    position:fixed;
    align-items: center;
    bottom: 0%;
    height: 117px;
    width: 100%;
    justify-content: flex-start;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    padding: 10px 14px;
    p{
        color: #293845;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
    }
`

const ImageContainer = styled.div`
width: 64px;
height: 89px;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin-right: 15px;
img{
width: 48px;
height: 72px;}
`


