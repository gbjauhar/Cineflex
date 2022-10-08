import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Sessions(props){
    const { days, date, hour } = props
    return(<ContainerSessions>
        {days} - {date}
            <Link to="/assentos/1">
            <button>{hour}</button>
            </Link>
            </ContainerSessions>
    )
}

const ContainerSessions = styled.div`
    width: 241px;
    height: 35px;
    margin-left: 24px;
    top: 170px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    flex-direction: column;
    letter-spacing: 0.02em;
    color: #293845;
    button{
        width: 83px;
        height: 43px;
        left: 23px;
        margin-top:22px;
        background: #E8833A;
        border-radius: 3px;}
`
