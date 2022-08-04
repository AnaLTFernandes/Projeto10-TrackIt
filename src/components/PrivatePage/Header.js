import styled from 'styled-components';

import logo from '../../assets/images/logo.svg';

export default function Header () {

    const auth = JSON.parse(localStorage.getItem('trackit'));
    const urlUserImage = auth.userData.image;

    return (
        <HeaderWrapper>
            <img alt='trackit' src={logo}/>
            <UserImage alt='user' src={urlUserImage}/>
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

    img {
        height: 29px;
        width: auto;
    }
`;

const UserImage = styled.img`
    && {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
    }
`;