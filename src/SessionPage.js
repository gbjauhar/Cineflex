import styled from "styled-components"
import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"

export default function SessionPage(props) {
    const { setInputName, setInputCPF, setMovieName, setHour, setDate} = props
    const posterURL = "", title = "", weekday = "", date = ""
    const [arraySeats, setArraySeats] = useState({
        day:[weekday, date],
        seats:[],
        movie: [posterURL, title]})
    const { id } = useParams();
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${id}/seats`)

        promise.then(response => setArraySeats(response.data))
        promise.catch(erro => {
            console.log(erro.status);
        });
    })

    function setMovieInfo(){
        setMovieName(arraySeats.movie.title)
        setDate(arraySeats.day.date)
        setHour(arraySeats.name)
    }

    setMovieInfo()
    return (
        <Container>
            <p>Selecione os assentos</p>
            <ContainerSeats>
                <SeatsList> 
                    {arraySeats.seats.map((s) => <button key={s.id}>{s.name}</button>)}
                </SeatsList>
                <Caption>
                    <Verde></Verde>
                    <Cinza></Cinza>
                    <Amarelo></Amarelo>
                </Caption>
            </ContainerSeats>
            <Info>
                <h1>Nome do comprador:</h1>
                <input
                    placeholder="Digite seu nome..."
                    onChange={(event) => setInputName(event.target.value)} />
                <h2>CPF do comprador:</h2>
                <input
                    placeholder="Digite seu CPF.."
                    onChange={(event) => setInputCPF(event.target.value)} />
            </Info>
            <Link to="/sucesso">
                <button>Reservar assento(s)</button>
            </Link>
           <Footer>
            <ImageContainer>
            <img src={arraySeats.movie.posterURL} alt={arraySeats.movie.title}/>
            </ImageContainer>
            <p>{arraySeats.movie.title}</p>
            <p>{arraySeats.day.weekday} - {arraySeats.day.date}</p>
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
        color: #293845;
        margin-bottom: 14px;}
`

const ContainerSeats = styled.div`
    display:flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    
    `

const SeatsList = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
    align-items: center;
button{
        width: 26px;
height: 26px;
background: #C3CFD9;
border: 1px solid #808F9D;
border-radius: 12px;
    }
`

const Caption = styled.div`
    display: flex;
    align-items:center;
    justify-content: space-between;
    `

const Verde = styled.div`
    width: 25px;
height: 25px;
left: 78px;
top: 377px;

background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 17px;`

const Cinza = styled.div`
width: 24px;
height: 24px;
left: 178px;
top: 377px;

background: #C3CFD9;
border: 1px solid #7B8B99;
border-radius: 17px;`

const Amarelo = styled.div`
width: 24px;
height: 24px;
left: 271px;
top: 377px;

background: #FBE192;
border: 1px solid #F7C52B;
border-radius: 17px;`

const Info = styled.div`
display:flex;
flex-direction:column;
input{
    width: 327px;
    height: 51px;
    left: 24px;
    top: 497px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 3px;
    input::placeholder{
        width: 309px;
height: 50px;
left: 42px;
top: 498px;

font-family: 'Roboto';
font-style: italic;
font-weight: 400;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

color: #AFAFAF;
    }
    }`



const Footer = styled.footer`
    display: flex;
    position:fixed;
    align-items: center;
    bottom: 0%;
    width: 100%;
    height: 117px;
    justify-content: flex-start;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    box-sizing: border-box;
    padding: 10px 14px;

    p{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;
        color: #293845;
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
height: 72px;
    }
`
