import styled from "styled-components";

import isDate from "./IsDate";

export default function ViewDay ({ date, history, setViewDay }) {
    const weekdays = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

    const response = isDate(date, history);

    if (response.isDate) {

        const data = response.day;
        const weekDay = weekdays[data.habits[0].weekDay];

        return (
            <Container>
                <div>
                    <Menu>
                        <span>
                            <h1>{weekDay}, {data.day}</h1>
                            <b>Hábitos concluídos</b>
                            <strong>Hábitos não concluídos</strong>
                        </span>

                        <ion-icon name="close-circle-outline"
                            onClick={() => setViewDay({visible:false})}>
                        </ion-icon>
                    </Menu>

                    {data.habits.map(({ name, done, id }) => (
                        <Habit key={id} done={done}>{name}</Habit>
                    ))}

                </div>
            </Container>
        );
    }
    
    return '';
}


const Container = styled.div`
    && {
        width: 100%;
        max-width: 600px;
        min-height: 70vh;
        height: 100%;
        margin: 70px auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #F2F2F2;

        & > div {
            width: 90%;
            margin: 0 auto;
        }
    }

    h1 {
        width: fit-content;
        font-size: 22px;
        color: #126BA5;
        margin-bottom: 4px;
        align-self: flex-end;
    }
`;

const Menu = styled.div`
    min-height: 35px;
    display: flex;
    justify-content: space-between;

    span {
        display: flex;
        flex-direction: column;
        font-size: 14px;

        b {
            color: #8CC654;
            margin-top: 5px;
        }

        strong {
            color: #EA5766;
        }
    }

    ion-icon {
        color: #666666;
        font-size: 24px;
        margin: 0 0 0 15px;
    }

    && {
        width: 100%;
        margin: 22px 0;
    }
`;

const Habit = styled.div`
    && { 
        width: 100%;
        height: 70px;
        border-radius: 5px;
        margin-bottom: 10px;
        padding: 15px;
        display: flex;
        align-items: center;
        background-color: ${props => props.done ? '#8CC654' : '#EA5766'};
        font-size: 24px;
        color: white;
    }
`;