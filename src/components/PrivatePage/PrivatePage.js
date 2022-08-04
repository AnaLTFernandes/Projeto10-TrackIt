import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import ErrorContext from '../../contexts/ErrorContext';
import Header from './Header';

const sec = 1000;
const min = sec * 60;
const hour = min * 60;

export default function PrivatePage ({ children }) {
    const navigate = useNavigate();
    const { setAlertMessage } = useContext(ErrorContext);

    const auth = JSON.parse(localStorage.getItem('trackit'));

    const timeNow = +new Date();
    const timeLogged = auth.timestamp;

    if (((timeNow - timeLogged) <= (hour * 2)) && auth) {
        return (
            <>
                <Header />
                {children}
            </>
        )
    } else {
        setAlertMessage({alert:true, message:'Sessão expirada'});
        navigate('/');
    }
}