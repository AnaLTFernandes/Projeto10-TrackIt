import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ActionsDisabledContext from '../contexts/ActionsDisabledContext';
import ErrorContext from '../contexts/ErrorContext';
import UserDataContext from '../contexts/UserDataContext';

import AlertMessage from './AlertMessage';
import Login from './Register/LoginPage';
import ResgisterPage from './Register/RegisterPage';
import PrivatePage from './PrivatePage/PrivatePage';


function App() {
  const [alertMessage, setAlertMessage] = useState({alert: false, message:''});
  const [actionDisabled, setActionDisabled] = useState(false);
  const [userData, setUserData] = useState({
    dataRegister: JSON.parse(localStorage.getItem('trackit')),
    habitsChecked: 0,
    habitsUnchecled: 0
  });

  return (
    <BrowserRouter>

      <GlobalStyled />

      <ErrorContext.Provider value={{ alertMessage, setAlertMessage }}>
        <ActionsDisabledContext.Provider value={{ actionDisabled, setActionDisabled }}>
          <UserDataContext.Provider value={{ userData, setUserData }}>

            <AlertMessage />
            
            <Routes>
              <Route path='/' element={<Login />}/>
              <Route path='/cadastro' element={<ResgisterPage />}/>
              <Route path='/habitos' element={
                <PrivatePage>
                </PrivatePage>
              }/>
            </Routes>

          </UserDataContext.Provider>
        </ActionsDisabledContext.Provider>
      </ErrorContext.Provider>

    </BrowserRouter>
  );
}

export default App;
