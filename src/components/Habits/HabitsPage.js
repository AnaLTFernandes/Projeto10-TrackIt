import styled from "styled-components";

import { useEffect, useState } from "react";
import { getHabits } from "../../services/service";

import Button from "../../assets/styles/Button";
import CreateHabit from "./CreateHabit/CreateHabit";
import ListHabits from "./ListHabits";


export default function HabitsPage() {
    const [habitsList, setHabitsList] = useState([]);
    const [formActive, setFormActive] = useState(false);
    const [updateList, setUpdateList] = useState(false);

    
    useEffect(() => {
        const promise = getHabits();

        promise.then((response) => {
            setFormActive(false);
            setHabitsList(response.data);
        });
    }, [updateList]);


    return (
        <main>
            <Container height={habitsList.length !== 0 ? '100%' : '70vh'} >
                <Menu>
                    <h1>Meus hábitos</h1>
                    <Button
                       width='40px'
                       height='35px'
                       margin='0'
                       fontSize='26px'
                       onClick={() => setFormActive(true)}
                       disabled={false}>+</Button>
                </Menu>

                {formActive ? <CreateHabit 
                                updateList={updateList} 
                                setUpdateList={setUpdateList} 
                                setFormActive={setFormActive}/>
                            : ''
                }

                {habitsList.length !== 0 
                    ?   habitsList.map(habit => 
                            <ListHabits 
                                key={habit.id} 
                                id={habit.id} 
                                habit={habit} 
                                updateList={updateList}
                                setUpdateList={setUpdateList}
                            />)
                    :   <p>
                            Você não tem nenhum hábito cadastrado ainda. 
                            Adicione um hábito para começar a trackear!
                        </p>
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
    }

    p {
        font-size: 18px;
        color: #666666;
    }
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 22px 0;
`;