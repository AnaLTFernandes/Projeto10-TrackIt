import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ActionsDisabledContext from '../contexts/ActionsDisabledContext';
import ErrorContext from '../contexts/ErrorContext';

import AlertError from './AlertError';
import Login from './Register/LoginPage';
import ResgisterPage from './Register/RegisterPage';
import PrivatePage from './PrivatePage';


function App() {
  const [alertError, setAlertError] = useState({error: false, message:''});
  const [actionDisabled, setActionDisabled] = useState(false);

  return (
    <BrowserRouter>

      <GlobalStyled />

      <ErrorContext.Provider value={{ alertError, setAlertError }}>
        <ActionsDisabledContext.Provider value={{ actionDisabled, setActionDisabled }}>

          <AlertError />
          
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='/cadastro' element={<ResgisterPage />}/>
            <Route path='/habitos' element={
              <PrivatePage>
                <ResgisterPage />
              </PrivatePage>
            }/>
          </Routes>

        </ActionsDisabledContext.Provider>
      </ErrorContext.Provider>

    </BrowserRouter>
  );
}

export default App;
