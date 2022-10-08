import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



export default function MainPage(props) {
    const { setImg, img } = props
    const [tamanho, setTamanho] = useState([])

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')

        promise.then(res => console.log(res.data))
           promise.catch(erro => {
               console.log(erro.status);
           });
	}, []);
   
    function processPromise(promise){
        
        for(let i = 0; i < promise.data.length; i++){
            setTamanho(promise.data)
            setImg(promise.data[i].posterURL)
    }
}
function Movies(props){
    return(
        <ContainerMovies>
        <Link to="/sessoes/1">
              <img src={props.img} onClick={(props) => setMovie(props.id)}/> 
              </Link>
        </ContainerMovies>
    )
}
   


    return (
        <>
            <Title>
                <p>Selecione o filme</p>
            </Title>
            {tamanho.map((i) => <Movies img={img}/> )}
            
        </>
    )

    }




const Title = styled.div`
    width: 374px;
    height: 110px;
    left: 0px;
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

const ContainerMovies = styled.main`
    margin-left: 38px;
    img{
        width: 129px;
        height: 193px;
        left: 38px;
        top: 177px;}
`