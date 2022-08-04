import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postLogin } from '../../services/service';
import ErrorContext from '../../contexts/ErrorContext';
import ActionsDisabledContext from '../../contexts/ActionsDisabledContext';

import RenderPage from './RenderPage';

export default function Login() {
  const [form, setForm] = useState({});
  const { setActionDisabled } = useContext(ActionsDisabledContext);
  const { setAxiosError } = useContext(ErrorContext);

  const navigate = useNavigate();
  
  const dataPage = {
    form: {
      inputs: [{
        name:'email',
        type:'email',
        placeholder:'email',
        pattern:"[a-z0-9._%+-]+@[a-z0-9.-]+.com"
      }, {
        name:'password',
        placeholder:'senha',
        type:'text',
      }],
      textButton:'Entrar'
    },
    span:'Não tem uma conta? Cadastre-se!',
    linkRouter:'/cadastro'
  }

  function handleForm(event) {
    event.preventDefault();

    setActionDisabled(true);
    
    const promise = postLogin(form);

    promise.catch((e) => {
      setAxiosError({error:true, message:e.response.data.message});
      
      setTimeout(() => {
        setActionDisabled(false);
      }, 2100);
    });

    promise.then((response) => {
      localStorage.setItem('trackit', JSON.stringify({
        userData:{...response.data},
        timestamp:+new Date()
      }));
      
      navigate('/habitos');
    }); // mudar para rota /hoje
  }

  function updateForm(name, value) {
    setForm({
      ...form,
      [name]:value
    })
  }

  return (
    <>
      {dataPage
        ? <RenderPage data={dataPage} onSubmit={handleForm} 
          onChange={(e => updateForm(e.target.name, e.target.value))} /> 
        : ''
      }
    </>
  );
}