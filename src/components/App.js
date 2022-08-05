import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ActionsDisabledContext from '../contexts/ActionsDisabledContext';
import ErrorContext from '../contexts/ErrorContext';
import UserDataContext from '../contexts/UserDataContext';

import AlertMessage from './AlertMessage';
import PrivatePage from './PrivatePage/PrivatePage';
import Login from './Register/LoginPage';
import ResgisterPage from './Register/RegisterPage';
import HabitsPage from './Habits/HabitsPage';
import HistoricPage from './Historic/HistoricPage';
import TodayPage from './Today/TodayPage';


function App() {
  const [alertMessage, setAlertMessage] = useState({alert: false, message:''});
  const [actionDisabled, setActionDisabled] = useState(false);
  const [userData, setUserData] = useState({
    dataRegister: JSON.parse(localStorage.getItem('trackit')),
    habitsChecked: 0,
    habitsUnchecled: 0,
    formCanceled: {}
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
                  <HabitsPage />
                </PrivatePage>
              }/>
              
              <Route path='/historico' element={
                <PrivatePage>
                  <HistoricPage />
                </PrivatePage>
              }/>
              
              <Route path='/hoje' element={
                <PrivatePage>
                  <TodayPage />
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
