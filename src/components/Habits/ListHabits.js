import styled from "styled-components";

import { deleteHabit } from "../../services/service";

import daysButton from "./CreateHabit/DaysButtonsArray";


export default function ListHabits ({ habit, id, updateList, setUpdateList }) {
    
    const days = daysButton.map(day => {
        if (habit.days.includes(day.index)) {
            return {
                ...day,
                selected:true
            }
        }
        return {
            ...day,
            selected:false
        }
    })

    function deleteThisHabit (id) {
        const confirm = window.confirm('Você tem certeza que deseja apagar o hábito? Não é possível resgatá-lo após o processo.');
        if (confirm) {
            const promise = deleteHabit(id);
            promise.then(() => setUpdateList(!updateList));
        }
    }

    return (
        <Wrapper>
            
            <span>{habit.name}</span>

            <Days>
                {days.map((day, index) => (<Day key={index} selected={day.selected}>{day.name}</Day>))}
            </Days>

            <ion-icon name="trash-outline" onClick={() => deleteThisHabit(id)}></ion-icon>

        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 91px;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    background-color: var(--white);
    position: relative;

    span {
        font-size: 20px;
        color: #666666;
    }

    ion-icon {
        position: absolute;
        top: 10px;
        right: 10px;
        color: #666666;
    }
`;

const Days = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

const Day = styled.div`
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 4px auto 0;
    border-radius: 5px;
    background-color: ${props => props.selected ? '#CFCFCF' : 'var(--white)'};
    border: 1px solid ${props => props.selected ? '#CFCFCF' : '#D4D4D4'};
    font-size: 20px;
    color: ${props => props.selected ? 'var(--white)' : '#D4D4D4'};
    cursor: pointer;
`;