import styled from "styled-components";

export default function HistoricPage () {
    return (
        <main>
            <Container>
                <Menu>
                    <h1>Histórico</h1>
                </Menu>
                <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
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
    margin: 22px 0;
`;