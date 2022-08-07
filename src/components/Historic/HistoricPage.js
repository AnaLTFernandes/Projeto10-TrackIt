import styled from "styled-components";
import CalendarSection from "./Calendar/CalendarSection";

import { useEffect, useState } from "react";
import { getHistory } from '../../services/service';

export default function HistoricPage () {
    const [history, setHistory] = useState([]);
  
  
    useEffect(() => {
      const promise = getHistory();
      promise.then((response) => setHistory(response.data));
    }, []);


    return (
        <main>
            <Container>
                <Menu>
                    <h1>Histórico</h1>
                </Menu>
                {history.length === 0
                    ? <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
                    : <CalendarSection history={history} />
                }
            </Container>
        </main>
    );
}

const Container = styled.div`
    width: 90%;
    max-width: 600px;
    min-height: 70vh;
    height: 100%;
    margin: 70px 0;
    display: flex;
    flex-direction: column;
    align-items: center;

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
    width: 100%;
    max-width: 500px;
    margin: 22px 0;
`;