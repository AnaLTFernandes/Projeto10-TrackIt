import styled from 'styled-components';

import { useContext, useEffect } from 'react';

import { UserDataContext } from '../../contexts/';

import logo from '../../assets/images/logo.svg';

export default function Header ({ setMenu }) {
    const { userData, setUserData } = useContext(UserDataContext);
    let urlUserImage;

    useEffect(() => {
        setUserData({
            ...userData,
            dataRegister: JSON.parse(localStorage.getItem('trackit'))
        });
    }, []);

    if (userData.dataRegister) {
        if (userData.dataRegister.userData.image) {
            urlUserImage = userData.dataRegister.userData.image;
        }
    }

    return (
        <HeaderWrapper>
            <img alt='trackit' src={logo}/>
            <UserImage alt='user' src={urlUserImage} onClick={() => setMenu(true)}/>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled.header`
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    box-shadow: 0 4px 4px 0 rgba(0,0,0,0.15);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 18px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 2;
    transition: all .2s linear;

    img {
        height: 29px;
        width: auto;
    }

    @media (min-width: 800px) {
        padding: 0 5%;
    }
`;

const UserImage = styled.img`
    && {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
        cursor: pointer;
    }
`;