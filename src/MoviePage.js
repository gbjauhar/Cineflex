import styled from "styled-components"
import { Link } from "react-router-dom"
import axios from "axios"
import { useEffect, useState } from "react"
import Sessions from "./Sessions"


export default function MoviePage(props){

    const { setDays, setHour, setDate, setName, name, img } = props
    useEffect(() => {
    const promise = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies/1/showtimes")
    
    promise.then(processPromise)
}, [])
   
const [dias, setDias] = useState([])
    
    function processPromise(promise){
        setName(promise.data.title)
        for(let i = 0; i < promise.data.days.length; i++){
            setDias(promise.data.days)
            setDays(promise.data.days[i].weekday)
            setDate(promise.data.days[i].date)
            for(let j = 0; j < promise.data.days[i].showtimes.length; j++){
        setHour(promise.data.days[i].showtimes[j].name)
    }
}
    }
    return(
        <>
        <Title>
            Selecione o horário
            </Title>
            {dias.map ((d) =>
            <Sessions date={d.date} days={d.days} hour={d.hour}/>)}
           <Footer>
            <img src={img} />
                <p>{name}</p>
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