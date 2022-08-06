import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { AlertContext } from '../../contexts/';
import Header from './Header';
import Footer from './Footer';

const sec = 1000;
const min = sec * 60;
const hour = min * 60;

export default function PrivatePage ({ children }) {
    const navigate = useNavigate();
    const { setAlertMessage } = useContext(AlertContext);

    const auth = JSON.parse(localStorage.getItem('trackit'));

    const timeNow = +new Date();
    const timeLogged = auth.timestamp;

    if (((timeNow - timeLogged) <= (hour * 1)) && auth) {
        return (
            <>
                <Header />
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