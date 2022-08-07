
import styled from "styled-components";
import Button from "../../assets/styles/Button";
import Background from "./Background";

export default function ConfirmAction ({ actionConfirm, setActionConfirm }) {

    return (
        <Background>
            <Wrapper>
                <p>{actionConfirm.text}</p>
                <Buttons>
                    <CancelButton 
                        onClick={()=>setActionConfirm({...actionConfirm, confimation:false,visible:false})}>
                            Cancelar
                    </CancelButton>
                    <Button
                        width='200px'
                        height='40px'
                        margin='0'
                        fontSize='18px'
                        onClick={()=>setActionConfirm({...actionConfirm, confimation:true,visible:false})}>
                            Confirmar
                    </Button>
                </Buttons>
            </Wrapper>
        </Background>
    );
}

const Wrapper = styled.div`
    width: 90%;
    height: auto;
    max-width: 500px;
    background-color: var(--white);
    box-shadow: 0 0 10px 1px rgb(0 0 0 / 40%);
    margin: auto;
    border-radius: 9px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
        color: #666666;
        font-size: 18px;
        text-align: center;
        margin-bottom: 50px;
    }
`;

const Buttons = styled.div`
    display: flex;
    justify-content: space-around;
`;

const CancelButton = styled.div`
    width: 200px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    border: none;
    background-color: var(--white);
    color: var(--light-blue-theme);
    cursor: pointer;
`;
