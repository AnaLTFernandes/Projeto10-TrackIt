import styled from "styled-components";

export default function AxiosError ({ error, setError, message }) {

    if (error) {
        setTimeout(() => {
            setError(!error);
        }, 2000);
    }

    return (
        <Alert 
            top={error ? '30px' : '0'}
            opacity={error ? '0.98' : '0'}
        >{message}</Alert>
    );
}

const Alert = styled.div`
    width: 270px;
    min-height: 40px;
    background-color: lightcoral;
    position: fixed;
    top: ${props => props.top};
    opacity: ${props => props.opacity};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 7px;
    box-shadow: 0 1px 3px 0 grey;
    font-size: 16px;
    color: #FFFFFF;
    transition: all .2s linear;
`;