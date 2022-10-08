import styled from "styled-components"
import axios from "axios"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function SessionPage(props) {
    const { setInputName, setInputCPF } = props
    const [seats, setSeats] = useState([])
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/showtimes/1/seats")
    promise.then(res => setSeats(res.data.seats))
    function Seats(props){
        return(
            <ContainerSeats>
                <button>{props.id}</button>
            </ContainerSeats>
            
        )
    }
    return (
        <>
            <Title>
                <p>Selecione os assentos</p>
            </Title>
            {seats.map((s) => <Seats id={s.id}/>)}
            <Caption>
                <Verde></Verde>
                <Cinza></Cinza>
                <Amarelo></Amarelo>
            </Caption>
            <Info>
            <h1>Nome do comprador:</h1>
            <input
                placeholder="Digite seu nome..." 
                onChange={(event) => setInputName(event.target.value)}/>
            <h2>CPF do comprador:</h2>
            <input
                placeholder="Digite seu CPF.." 
                 onChange={(event) => setInputCPF(event.target.value)} />
                </Info>
                <Link to="/sucesso">
                    <button>Reservar assento(s)</button>
                    </Link>
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

const ContainerSeats = styled.div`
    display:flex;
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

    const Reservar = styled.button`
    width: 225px;
height: 42px;
left: 72px;
top: 688px;

background: #E8833A;
border-radius: 3px;
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 21px;
letter-spacing: 0.04em;

color: #FFFFFF;`