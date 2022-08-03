import { useContext } from "react";
import styled from "styled-components";
import ErrorContext from "../contexts/ErrorContext";

export default function AxiosError () {
    const { alertError, setAlertError } = useContext(ErrorContext);

    if (alertError.error) {
        setTimeout(() => {
            setAlertError({error:false, message:''});
        }, 2000);
    }

    return (
        <Alert 
            top={alertError.error ? '30px' : '0'}
            opacity={alertError.error ? '0.98' : '0'}
        >{alertError.message}</Alert>
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