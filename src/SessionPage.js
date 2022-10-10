import styled from "styled-components"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Seat from "./Seat"

export default function SessionPage(props) {
    const navigate = useNavigate()
    const [selectedSeats, setSelectedSeats] = useState([])
    const { setInputName, setInputCPF, setMovieName, setHour, setDate, inputName, inputCPF, setNameSeats, nameSeats } = props
    const posterURL = "", title = "", weekday = "", date = ""
    const [arraySeats, setArraySeats] = useState({
        day:[weekday, date],
        seats:[],
        movie: [posterURL, title]})
    const { id } = useParams();

    
    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${id}/seats`)

        promise.then(response => setArraySeats(response.data))
        promise.catch(erro => {
            console.log(erro.status);
        });
    })

function processPromise(){
    setMovieInfo()
    const request = ({
        ids:selectedSeats,
        name: inputName,
        cpf: inputCPF
    })
    const promisePost = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", request)
    promisePost.then(navigate("/sucesso"))
}

   function setMovieInfo(){
        setMovieName(arraySeats.movie.title)
        setDate(arraySeats.day.date)
        setHour(arraySeats.name)
        
    }

  
    
    return (
        <Container>
            <p>Selecione os assentos</p>
            <ContainerSeats>
                <SeatsList>
                {arraySeats.seats.map((s) => 
                <Seat 
                id={s.id} 
                name={s.name} 
                isAvailable={s.isAvailable} 
                setSelectedSeats={setSelectedSeats} 
                selectedSeats={selectedSeats} 
                setNameSeats={setNameSeats} 
                nameSeats={nameSeats}
                key={s.id}/>)}
                </SeatsList>
                    
                <Caption>
                    <Verde></Verde><h1>Assento selecionado</h1>
                    <Cinza></Cinza><h1>Assento indisponível</h1>
                    <Amarelo></Amarelo><h1>Assento ocupado</h1>
                </Caption>
            </ContainerSeats>
            <Info>
                <h1>Nome do comprador:</h1>
                <input
                    placeholder="Digite seu nome..."
                    type="text"
                    onChange={(event) => setInputName(event.target.value)}/>
               <h1>Nome do comprador:</h1>
                <input
                    placeholder="Digite seu CPF.."
                    type="text"
                    onChange={(event) => setInputCPF(event.target.value)}/>
            </Info>
            <Link to="/sucesso">
                <button onClick={processPromise}>Reservar assento(s)</button>
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
        button{
            width: 225px;
            height: 42px;
            background-color: #e9933a;
            border-radius: 3px;
            margin-top: 30px;
            font-size: 18px;
            color: #ffffff;
        }
`

const ContainerSeats = styled.div`
    box-sizing: border-box;
    padding-left:20px;
    padding-right:20px;
    margin-bottom:40px;
    
    `

const SeatsList = styled.div`
display: flex;
flex-wrap: wrap;
`

const Caption = styled.div`
    display: flex;
    margin-top:20px;
    align-items:center;
    justify-content: flex-start;
    h1{
        font-family: 'Roboto';
        font-style: normal;
        font-size: 13px;
        color: #4e5a65;
        margin-right:15px;
    }
    `

const Verde = styled.div`
    width: 15px;
height: 15px;
background: #1AAE9E;
border: 1px solid #0E7D71;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`

const Cinza = styled.div`
width: 15px;
height: 15px;
background: #c3cfd9;
border: 1px solid #0E7D71;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`

const Amarelo = styled.div`
width: 15px;
height: 15px;
background: #fbe192;
border: 1px solid #0E7D71;
border-radius: 12px;
margin-right: 5px;
margin-top: 5px;
`
const Info = styled.div`
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-size: 18px;
}
input{
    width: 327px;
    height: 51px;
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
    }}
    `



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

