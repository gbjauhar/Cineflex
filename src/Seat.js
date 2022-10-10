import { useState } from "react";
import styled from "styled-components";


export default function Seat( { id, name, setSelectedSeats, selectedSeats, isAvailable, setNameSeats, nameSeats}){
    let [seatSelected, setSeatSelected] = useState(false)
    function selected(){
        if(isAvailable && !seatSelected){
            setSeatSelected(!seatSelected)
            setSelectedSeats([...selectedSeats, id])
            setNameSeats([...nameSeats, name])
            return
         } 
        else if(isAvailable){
            setSeatSelected(!seatSelected)
            let newArray = [...nameSeats]
            let array = [...selectedSeats]
            array = array.filter((seat) => seat !== id)
            newArray = newArray.filter((seat) => seat !== name)
            setNameSeats(newArray)
            setSelectedSeats(array)
            return

        }
    }
    return(
        <SeatStyled isAvailable={isAvailable} onClick={selected} seatSelected={seatSelected}>
            {name}
        </SeatStyled>
    )
}

const SeatStyled = styled.div`
    width: 26px;
    height: 26px;
    border-radius: 12px;
    background-color: ${props => 
    props.seatSelected ? '#1AAE9E' : props.isAvailable ? '#C3CFD9' : '#FBE192'};
    border: 1px solid ${props => 
    props.seatSelected ? '#0E7D71' : props.isAvailable ? '#808F9D' : '#F7C52B'};
    margin-right: 5px;
    margin-top: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    `