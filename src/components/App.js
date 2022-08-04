import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ActionsDisabledContext from '../contexts/ActionsDisabledContext';
import ErrorContext from '../contexts/ErrorContext';

import AlertMessage from './AlertMessage';
import Login from './Register/LoginPage';
import ResgisterPage from './Register/RegisterPage';
import PrivatePage from './PrivatePage/PrivatePage';


function App() {
  const [alertMessage, setAlertMessage] = useState({alert: false, message:''});
  const [actionDisabled, setActionDisabled] = useState(false);

  return (
    <BrowserRouter>

      <GlobalStyled />

      <ErrorContext.Provider value={{ alertMessage, setAlertMessage }}>
        <ActionsDisabledContext.Provider value={{ actionDisabled, setActionDisabled }}>

          <AlertMessage />
          
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/cadastro' element={<ResgisterPage />}/>
            <Route path='/habitos' element={
              <PrivatePage>
              </PrivatePage>
            }/>
          </Routes>

        </ActionsDisabledContext.Provider>
      </ErrorContext.Provider>

    </BrowserRouter>
  );
}

export default App;
