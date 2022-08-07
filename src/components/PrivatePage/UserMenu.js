import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserDataContext } from "../../contexts";
import { Background } from "../Actions";

export default function UserMenu ({ setMenu }) {
    const { userData, setUserData } = useContext(UserDataContext);
    const [visible, setVisible] = useState(false);
    const [keepLogin, setKeepLogin] = useState(false);

    const urlUserImage = userData.dataRegister.userData.image;
    const userName = userData.dataRegister.userData.name;


    useEffect(() => {
        const prefer = (JSON.parse(localStorage.getItem('trackit')).keepLogin);

        setKeepLogin(prefer);

        setTimeout(() => {
            setVisible(true);
        }, 10);
    }, []);


    function setPrefer ({ logout = false}) {

        if (logout) {
            keepLogin = true;
        }

        setKeepLogin(!keepLogin);

        let data = (JSON.parse(localStorage.getItem('trackit')));
        data.keepLogin = !data.keepLogin;
        localStorage.setItem('trackit', JSON.stringify(data));
        setUserData({...userData, keepLogin: !data.keepLogin});
    }

    return (
        <Wrapper>
            <Background>

                <Close onClick={() => setMenu(false)} />

                <Menu visible={visible}>
                    <div>
                        <img alt='user' src={urlUserImage}/>
                        <span>{userName}</span>
                    </div>

                    <Division />
                    
                    <h2 onClick={setPrefer}>{keepLogin ? 'Manter logado' : 'Não manter logado'}</h2>

                    <Division />

                    <Link to='/' onClick={() => setPrefer(true)}><span><b>Sair</b></span></Link>
                </Menu>

            </Background>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    height: 100%;
    width: 100%;
`;

const Close = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
`;

const Menu = styled.div`
    height: 100%;
    width: 80%;
    max-width: 300px;
    padding: 20px;
    background-color: #F2F2F2;
    position: fixed;
    top: 0;
    bottom: 0;
    right: ${props => props.visible ? 0 : '-300px'};
    transition: all .2s linear;

    div {
        display: flex;
        align-items: center;
    }

    img {
        width: 51px;
        height: 51px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
    }

    span {
        color: #666666;
        font-size: 18px;
    }

    h2 {
        font: 16px;
        color: #666666;
        text-decoration: underline;
        cursor: pointer;
    }

    b {
        color: #126BA5;
    }
`;

const Division = styled.div`
    && {
        width: 100%;
        height: 1px;
        background-color: #c2c2c2;
        margin: 20px 0;
    }
`;