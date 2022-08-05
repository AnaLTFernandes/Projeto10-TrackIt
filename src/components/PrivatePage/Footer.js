import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import UserDataContext from '../../contexts/UserDataContext';

import styled from 'styled-components';

export default function Header () {
    const { userData } = useContext(UserDataContext);

    const value = userData.habitsChecked;
    const maxValue = userData.habitsUnchecled;

    return (
        <FooterWrapper>
            <Link to='/habitos'>Hábitos</Link>
            <Link to='/hoje'>
                <div>
                    <CircularProgressbar
                        value={value}
                        maxValue={maxValue}
                        text={`Hoje`}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            textSize: "18px",
                            pathColor: `var(--white)`,
                            textColor: "#FFFFFF",
                            trailColor: "transparent",
                            backgroundColor: "var(--light-blue-theme)"
                        })}
                    />
                </div>
            </Link>
            <Link to='/historico'>Histórico</Link>
        </FooterWrapper>
    );
}

const FooterWrapper = styled.footer`
    width: 100%;
    height: 70px;
    background-color: var(--white);
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 18px;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;

    a {
        font-size: 18px;
        color: var(--light-blue-theme);
    }

    div {
        width: 91px;
        height: 91px;
        margin: 0 0 42px 0;
    }
`;