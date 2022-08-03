import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import ActionsDisabledContext from '../contexts/ActionsDisabledContext';
import ErrorContext from '../contexts/ErrorContext';
import Login from './Register/LoginPage';
import AxiosError from './AxiosError';

function App() {
  const [axiosError, setAxiosError] = useState({error: false, message:''});
  const [actionDisabled, setActionDisabled] = useState(false);

  return (
    <BrowserRouter>

      <GlobalStyled />

      <ErrorContext.Provider value={{ axiosError, setAxiosError }}>
        <ActionsDisabledContext.Provider value={{ actionDisabled, setActionDisabled }}>

          <AxiosError />
          
          <Routes>
            <Route path='/' element={<Login />}/>
          </Routes>

        </ActionsDisabledContext.Provider>
      </ErrorContext.Provider>

    </BrowserRouter>
  );
}

export default App;
