import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { postSignUp } from '../../services/service';
import { ActionsDisabledContext, AlertContext } from '../../contexts/';

import RenderPage from './RenderPage';

export default function Login() {
  const [form, setForm] = useState({});
  const { setActionDisabled } = useContext(ActionsDisabledContext);
  const { setAlertMessage } = useContext(AlertContext);

  const navigate = useNavigate();

  const dataPage = {
    form: {
      inputs: [{
        name:'email',
        type:'email',
        placeholder:'email',
      }, {
        name:'password',
        placeholder:'senha',
        type:'text',
      }, {
        name:'name',
        placeholder:'nome',
        type:'text',
      }, {
        name:'image',
        placeholder:'foto',
        type:'url',
      }],
      textButton:'Entrar'
    },
    span:'Já tem uma conta? Faça login!',
    linkRouter:'/'
  }

  function handleForm(event) {

    event.preventDefault();

    setActionDisabled(true);

    const promise = postSignUp(form);

    promise.catch((e) => {
      setAlertMessage({alert:true, message:e.response.data.message});

      setTimeout(() => {
        setActionDisabled(false);
      }, 2100);
    });

    promise.then(() => {
      setAlertMessage({alert:true, message:'Cadastro feito com sucesso', color:'#8FC549'});

      setTimeout(() => {
        setActionDisabled(false);
      }, 2100);

      navigate('/');
    });
  }

  function updateForm(name, value) {
    setForm({
      ...form,
      [name]:value
    });
  }

  return (
    <RenderPage data={dataPage} onSubmit={handleForm}
      onChange={(e => updateForm(e.target.name, e.target.value))}
    />
  );
}