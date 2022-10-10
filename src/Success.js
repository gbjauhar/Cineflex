import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Success(props){

    const { inputCPF, inputName, hour, date, movieName, nameSeats, setNameSeats} = props
    console.log(nameSeats)

 
    return(
        <Main>
            <p>Pedido feito<br/> com sucesso!</p>
            <h1>Filme e sessão</h1>
            <h2>{movieName}</h2>
            <h2>{date} - {hour}</h2>
            <h1>Ingressos</h1>
            {nameSeats.map((s) => <h2 key={s}>Assento {s}</h2> )}
            <h1>Comprador</h1>
            <h2>Nome: {inputName}</h2>
            <h2>CPF: {inputCPF}</h2>
        <Link to="/">
        <button onClick={() => setNameSeats([])}>Voltar para home</button>
        </Link>
        
        </Main>
    )
}

const Main = styled.main`
margin-top: 100px;
display: flex;
align-items: center;
flex-direction: column;
p{
    font-family: 'Roboto';
    font-size: 24px;
    font-weight:700;
    color: #247a6b;
    margin-bottom: 14px;

}
h1{
    font-family: 'Roboto';
    font-size: 24px;
    color: #293845;
    font-weight: 700;
    margin-bottom: 10px;
    margin-top: 10px;
}
h2{
    font-family: 'Roboto';
    font-size: 22px;
    color: #293845;
    font-weight: 400;
    margin-top: 5px;
}
button{
        width: 225px;
        height: 42px;
        margin-top:15px;
        background: #E8833A;
        border-radius: 3px;}
`