import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import Movies from "./Movies";



export default function MainPage(props) {
    const { setMovieList, movieList } = props

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v8/cineflex/movies')

        promise.then(response => 
            setMovieList(response.data)
            )
           promise.catch(erro => {
               console.log(erro.status);
           });
	}, []);
   



    return (
        <Container>
                <p>Selecione o filme</p>
                <ContainerMovies>
                {movieList.map((m) => <Movies img={m} posterURL={m.posterURL} id={m.id} title={m.title} /> )}
                </ContainerMovies>
                
            
        </Container>
    )

    
    }


const Container = styled.div`
margin-top:100px;
display:flex;
flex-direction:column;
justify-content: center;
text-align: center;
p{
    font-family: 'Roboto';
        font-size: 24px;
        color: #293845;}
`

const ContainerMovies = styled.main`
width: 60%;
    display: flex;
    flex-wrap: wrap;
    margin: 20px auto;
    justify-content: space-between;
     img{
        width: 129px;
        height: 193px;
        left: 38px;
        top: 177px;} 
`