import { Link, useParams } from "react-router-dom"
import styled from "styled-components"

export default function Success(props){
    const { inputCPF, inputName, hour, date, name, movieList} = props
    const { id } = useParams()
    const index = id - 1
    return(
        <Main>
        <Title>
            <p>Pedido feito com sucesso!</p>
        </Title>
        <Movie>
            <h1>Filme e sessão</h1>
            <h2>{movieList[index].title}</h2>
            <h2>{date} - {hour}</h2>
        </Movie>
        <Tickets>
            <h1>Ingressos</h1>
            <h2>Assento 15</h2>
            <h2>Assento 16</h2>
        </Tickets>
        <Buyer>
            <h1>Comprador</h1>
            <h2>Nome: {inputName}</h2>
            <h2>CPF: {inputCPF}</h2>
        </Buyer>
        <Link to="/">
        <button>Voltar para home</button>
        </Link>
        
        </Main>
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

const Movie = styled.div`
display:flex;
flex-direction:column;
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
}
h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;}
`

const Tickets = styled.div`
display: flex;
flex-direction: column;
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
}
h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;}
`

const Buyer = styled.div`
display:flex;
flex-direction:column;
h1{
font-family: 'Roboto';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #293845;
}
h2{
font-family: 'Roboto';
font-style: normal;
font-weight: 400;
font-size: 22px;
line-height: 26px;
letter-spacing: 0.04em;
color: #293845;}
`

const Main = styled.main`
button{
        width: 83px;
        height: 43px;
        left: 23px;
        margin-top:22px;
        background: #E8833A;
        border-radius: 3px;}
`

