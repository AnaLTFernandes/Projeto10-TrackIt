import { useContext } from "react";
import styled from "styled-components";
import ErrorContext from "../contexts/ErrorContext";

export default function AlertMessage () {
    const { alertMessage, setAlertMessage } = useContext(ErrorContext);

    if (alertMessage.alert) {
        setTimeout(() => {
            setAlertMessage({alert:false, message:''});
        }, 2000);
    }

    return (
        <Alert 
            top={alertMessage.alert ? '30px' : '0'}
            opacity={alertMessage.alert ? '0.98' : '0'}
            color={alertMessage.color}
        >{alertMessage.message}</Alert>
    );
}

const Alert = styled.div`
    width: 270px;
    min-height: 40px;
    background-color: ${props => props.color ? props.color : 'lightcoral'};
    position: fixed;
    top: ${props => props.top};
    z-index: 2;
    opacity: ${props => props.opacity};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3px;
    border-radius: 7px;
    box-shadow: 0 1px 3px 0 grey;
    font-size: 16px;
    color: #FFFFFF;
    text-align: center;
    transition: all .2s linear;
`;