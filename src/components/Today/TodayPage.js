import styled from "styled-components";

import { getTodayHabits } from "../../services/service";
import { useEffect, useState } from "react";

import dayjs from "dayjs";

import HabitCard from "./HabitCard";


export default function TodayPage() {

    const [habits, setHabits] = useState([]);
    const [updateHabits, setUpdateHabits] = useState(false);

    useEffect(() => {
        const promise = getTodayHabits();
        promise.then((response) => setHabits(response.data));
    }, [updateHabits]);

    return (
        <main>
            <Container>
                <Menu>
                    <h1>Sexta, 05/08</h1>
                    <span>Nenhum hábito concluído ainda</span>
                </Menu>

                {habits.length === 0 
                    ? '' 
                    : habits.map((habits) => (

                        <HabitCard 
                            key={habits.id} 
                            {...habits} 
                            updateHabits={updateHabits}
                            setUpdateHabits={setUpdateHabits}
                        />
                    ))
                }

            </Container>
        </main>
    );
}

const Container = styled.div`
    width: 90%;
    min-height: 70vh;
    height: ${props => props.height};
    margin: 70px 0;

    h1 {
        width: fit-content;
        font-size: 22px;
        color: #126BA5;
        margin-bottom: 4px;
    }

    span {
        font-size: 18px;
        color: #bababa;
    }
`;

const Menu = styled.div`
    margin: 22px 0;
`;