import styled from "styled-components";
import { postHabitCheck, postHabitUncheck } from "../../services/service";

export default function HabitCard ({ 
        id,
        done,
        name,
        highestSequence,
        currentSequence,
        updateHabits,
        setUpdateHabits
    }) {

    function toggleCheckHabit () {
        done = !done;

        if (done) {

            const promise = postHabitCheck(id);
            promise.then(() => setUpdateHabits(!updateHabits));
        } else {

            const promise = postHabitUncheck(id);
            promise.then(() => setUpdateHabits(!updateHabits));
        }
    }

    function isHighestSequence () {
        return ((done) &&
            (highestSequence === currentSequence) &&
            (highestSequence > 0));
    }
    
    return (
        <Wrapper>

            <div>
                <HabitTitle>{name}</HabitTitle>

                <HabitStatus done={done} highest={isHighestSequence()}>

                    <span>Sequência atual: <b> {currentSequence} dias </b></span>
                    <span>Seu recorde: <strong> {highestSequence} dias </strong></span>

                </HabitStatus>
            </div>

            <Icon done={done}>
                <ion-icon name="checkbox" onClick={toggleCheckHabit}></ion-icon>
            </Icon>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 20px;
    background-color: var(--white);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const HabitTitle = styled.h2`
    color: #666666;
`;

const HabitStatus = styled.div`
    height: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 7px 0 0;

    && {
        span {
            font-size: 12px;
            color: #666666;
        }

        b {
            color: ${props => props.done ? '#8FC549' : '#666666'};
        }

        strong {
            color: ${props => props.highest ? '#8FC549' : '#666666'};
        }
    }
`;

const Icon = styled.div`
    ion-icon {
        font-size: 80px;
        color: ${props => props.done ? '#8FC549' : '#ebebeb'};
    }
`;