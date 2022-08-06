import { useState } from "react";
import styled from "styled-components";

export default function DayButton({ day, disabled }) {
    const [clicked, setClicked] = useState(day.selected);

    function toggleSelectDay () {
        if (!disabled) {
            setClicked(!clicked);
            day.selected = !day.selected;
        }
    }

    return (
        <Day
            onClick={toggleSelectDay}
            clicked={clicked}
        >{day.name}</Day>);
}

const Day = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 4px 29px 0;
    border-radius: 5px;
    background-color: ${props => props.clicked ? '#CFCFCF' : 'var(--white)'};
    border: 1px solid ${props => props.clicked ? '#CFCFCF' : '#D4D4D4'};
    font-size: 20px;
    color: ${props => props.clicked ? 'var(--white)' : '#D4D4D4'};
    cursor: pointer;
`;