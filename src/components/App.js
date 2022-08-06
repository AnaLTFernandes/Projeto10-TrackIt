import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import { ActionsDisabledContext, UserDataContext, AlertContext } from '../contexts/';
import { AlertMessage } from './Actions/';

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
    todayProgress: {
      habitsChecked: 0,
      habitsUnchecked: 0,
    },
    formCanceled: {}
  });

  return (
    <BrowserRouter>

      <GlobalStyled />

      <AlertContext.Provider value={{ alertMessage, setAlertMessage }}>
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
      </AlertContext.Provider>

    </BrowserRouter>
  );
}

export default App;
