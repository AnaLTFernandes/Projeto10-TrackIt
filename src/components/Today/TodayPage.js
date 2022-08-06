import styled from "styled-components";

import { getTodayHabits } from "../../services/service";
import { useContext, useEffect, useState } from "react";

import { UserDataContext } from '../../contexts/';

import HabitCard from "./HabitCard";
import GetDay from "./GetDay";
import UpdateProgress from "./UpdateProgress";


const dateToday = GetDay();

export default function TodayPage() {

    const [habits, setHabits] = useState([]);
    const [updateHabits, setUpdateHabits] = useState(false);

    const { userData } = useContext(UserDataContext);

    let progress = userData.todayProgress;
    let percentage = 0;


    useEffect(() => {
        const promise = getTodayHabits();
        promise.then((response) => setHabits(response.data));
    }, [updateHabits]);

    if (habits.length > 0) {
        percentage = UpdateProgress(habits, progress);
        progress.setUpdate(!progress.update);
    }


    return (
        <main>
            <Container progress={percentage}>
                <Menu>
                    <h1>{dateToday}</h1>
                    <span>
                        {progress.habitsChecked === 0
                            ? 'Nenhum hábito concluído ainda'
                            : `${percentage}% dos hábitos concluídos`
                        }
                    </span>
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
    max-width: 600px;
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
        color: ${props => (props.progress > 0) ? '#8FC549' : '#bababa'};
    }
`;

const Menu = styled.div`
    margin: 22px 0;
`;