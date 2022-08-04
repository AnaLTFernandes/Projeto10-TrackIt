import { useContext } from "react";

import styled from "styled-components";

import ActionsDisabledContext from "../../contexts/ActionsDisabledContext";

export default function Button({ children, ...otherProps }) {
    const { actionDisabled } = useContext(ActionsDisabledContext);

    return (
        <ButtonWrapper disabled={actionDisabled ? true : false} {...otherProps}>
            { children }
        </ButtonWrapper>
    );
}

const ButtonWrapper = styled.button`
    width: ${props => props.width ? props.width : '100%'};
    height: ${props => props.height ? props.height : '45px'};
    border-radius: 5px;
    background-color: var(--light-blue-theme);
    border: none;
    margin: ${props => props.margin ? props.margin : '0 0 25px'};
    font-size: ${props => props.fontSize ? props.fontSize : '20px'};
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:disabled {
        opacity: 0.7;
    }
`;