import GlobalStyled from '../assets/styles/globalStyle';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Register/LoginPage';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path='/' element={<Login />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
