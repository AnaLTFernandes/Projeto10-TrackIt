
import styled from "styled-components";

export default function Background ({ children }) {

    return (
        <Wrapper>{children}</Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    min-height: 100%;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    z-index: 4;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .2s linear;
`;