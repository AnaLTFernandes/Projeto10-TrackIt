import styled from "styled-components";

import { useEffect, useState } from "react";
import { getHabits } from "../../services/service";

import Button from "../../assets/styles/Button";
import CreateHabit from "./CreateHabit/CreateHabit";


export default function HabitsPage() {
    const [habitsList, setHabitsList] = useState([]);
    const [formActive, setFormActive] = useState(false);
    
    useEffect(() => {
        const promise = getHabits();
        promise.then((response) => {
            setFormActive(false);
            setHabitsList(response.data);
        });
    }, []);
    
    return (
        <main>
            <Container>
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
                                habitsList={habitsList} 
                                setHabitsList={setHabitsList} 
                                setFormActive={setFormActive}/>
                            : ''
                }

                {habitsList.length !== 0 
                    ?   ''
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
    height: calc(100% - 140px);

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