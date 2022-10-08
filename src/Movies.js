import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movies(props){
    return(
        <>
            <MovieImg>
        <Link to={`sessoes/${props.id}`}>
              <img src={props.posterURL}  id={props.id} index={props.index} posterURL={props.posterURL} title={props.title}/> 
              </Link>
              
              </MovieImg>
              

        </>
        
    )

}





const MovieImg = styled.div`
background-color: grey;
width: 145px;
height: 209px;
margin-top:10px;
`