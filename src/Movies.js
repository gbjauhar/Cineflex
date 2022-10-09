import styled from "styled-components"
import { Link } from "react-router-dom"

export default function Movies(props){
    return(

                <ImageMovie>
        <Link to={`sessoes/${props.id}`}>
              <img src={props.posterURL}  id={props.id} index={props.index} posterURL={props.posterURL} title={props.title} alt={props.title}/> 
              </Link>
              </ImageMovie>

        
    )

}






const ImageMovie = styled.div`
width: 145px;
height: 209px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
img{
        width: 129px;
        height: 193px;}
        `