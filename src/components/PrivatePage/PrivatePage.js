import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AlertContext } from '../../contexts/';
import Header from './Header';
import Footer from './Footer';
import UserMenu from './UserMenu';
import IsValidated from './IsValidated';


export default function PrivatePage ({ children }) {
    const [userMenu, setUserMenu] = useState(false);
    const { setAlertMessage } = useContext(AlertContext);

    const navigate = useNavigate();
    const isValidated = IsValidated();

    if (isValidated) {
        return (
            <>
                {userMenu ? <UserMenu setMenu={setUserMenu} /> : ''}

                <Header setMenu={setUserMenu} />
                {children}
                <Footer />
            </>
        );
    } else {
        localStorage.clear('trackit');
        setAlertMessage({alert:true, message:'Sessão expirada'});
        navigate('/');
    }
}