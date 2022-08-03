import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postLogin } from '../../services/service';
import AxiosError from '../AxiosError';

import AcessPage from './AcessPage';

export default function Login() {
  const [form, setForm] = useState({});
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');

  const navigate = useNavigate();
  
  const dataPage = {
    form: {
      inputs: [{
        nome:'email',
        type:'email',
        placeholder:'email',
      }, {
        nome:'password',
        placeholder:'senha',
        type:'text',
      }],
      textButton:'Entrar'
    },
    span:'Não tem uma conta? Cadastre-se!',
    linkRouter:'/cadastro',
    disabled
  }

  function handleForm(event) {
    event.preventDefault();

    setDisabled(true);
    
    const promise = postLogin(form);

    promise.catch((e) => {
      setMessageError(e.response.data.message);
      setError(!error);
      setDisabled(false);
    });

    promise.then(() => navigate('/home'));
  }

  function updateForm(name, value) {
    setForm({
      ...form,
      [name]:value
    })
  }

  return (
    <>
      <AxiosError setError={setError} error={error} message={messageError}/>
      {dataPage
        ? <AcessPage data={dataPage} onSubmit={handleForm} 
          onChange={(e => updateForm(e.target.name, e.target.value))} /> 
        : ''
      }
    </>

  );
}