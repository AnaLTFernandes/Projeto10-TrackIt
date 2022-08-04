import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { useContext } from 'react';

import ActionsDisabledContext from '../../contexts/ActionsDisabledContext';

import Loading from '../Loading';

import logo from '../../assets/images/logo-login.svg';
import Button from '../../assets/styles/Button';

export default function AcessPage({ data, onSubmit, onChange }) {
  const { actionDisabled } = useContext(ActionsDisabledContext);
  
  return (
    <Container>

      <img alt='trackit' src={logo}/>

      <form onSubmit={onSubmit}>
          {data.form.inputs.map(({ name, type, placeholder, ...otherProps }, index) =>(
              <input
                  disabled={actionDisabled ? true : false}
                  key={index}
                  required
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  onChange={onChange}
                  {...otherProps}>
              </input>
          ))}

        <Button>
          {actionDisabled ? <Loading size='30px'/> : data.form.textButton}
        </Button>

      </form>

      <Link to={data.linkRouter}>
          <span>{data.span}</span>
      </Link>
      
    </Container>
  );
}

const Container = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 180px;
    height: 180px;
    margin: 68px 0 30px;
  }

  form {
    width: 90%;
  }

  input {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    background-color: var(--white);
    border: 1px solid #d4d4d4;
    padding: 0 11px;
    font-size: 18px;
    margin-bottom: 6px;
  }

  input::placeholder {
    color: #d4d4d4;
  }

  input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
  }
  
  input:-webkit-autofill {
      -webkit-text-fill-color: black;
  }

  button {
    width: 100%;
    height: 45px;
    border-radius: 5px;
    background-color: var(--light-blue-theme);
    border: none;
    margin-bottom: 25px;
    font-size: 20px;
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  span {
    height: 17px;
    font-size: 14px;
    color: var(--light-blue-theme);
    text-decoration: underline;
  }

  input:disabled {
    background-color: #F2F2F2;
    -webkit-box-shadow: 0 0 0 30px #F2F2F2 inset;
    border: 1px solid #D4D4D4;
    color: #AFAFAF;
    -webkit-text-fill-color: #AFAFAF;
  }

  button:disabled {
    opacity: 0.7;
  }
`;