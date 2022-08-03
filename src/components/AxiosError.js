import { useContext } from "react";
import styled from "styled-components";
import ErrorContext from "../contexts/ErrorContext";

export default function AxiosError () {
    const { axiosError, setAxiosError } = useContext(ErrorContext);

    if (axiosError.error) {
        setTimeout(() => {
            setAxiosError({error:false, message:''});
        }, 2000);
    }

    return (
        <Alert 
            top={axiosError.error ? '30px' : '0'}
            opacity={axiosError.error ? '0.98' : '0'}
        >{axiosError.message}</Alert>
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