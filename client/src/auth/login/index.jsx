import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Login = () => {
  const [emailState, setEmailState] = useState('');
  const [passwordState, setPasswordState] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submit', emailState, passwordState);
  };

  return (
    <SectionWrapper>
      <Container>
        <div>
          <img src='/images/mumbo_skin.png' />
        </div>
        <form onSubmit={handleSubmit} className='signIn-form'>
          <LoginTitle>Sign In</LoginTitle>
          <InputWrap>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              value={emailState}
              onChange={(e) => setEmailState(e.target.value)}
              placeholder='Email'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              value={passwordState}
              onChange={(e) => setPasswordState(e.target.value)}
              placeholder='Password'
            />
          </InputWrap>
          <ButtonWrap>
            <Button type='submit'>punch wood</Button>
          </ButtonWrap>
        </form>
      </Container>
      <P>
        Don't have an account? &nbsp;<A to='/register'> Register</A>&nbsp; now!
      </P>
    </SectionWrapper>
  );
};

export default Login;

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url('/images/home-background-green.png') center center / cover
      no-repeat fixed;
    content: '';
    opacity: 0.9;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginTitle = styled.h1`
  font-size: 64px;
  margin-bottom: 3rem;
  color: var(--dark-yellow);
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const ButtonWrap = styled.div`
  margin-bottom: 3rem;
`;

const Label = styled.label`
  font-family: 'Kanit', sans-serif;
  font-size: 24px;
  color: var(--text-main);
`;

const Input = styled.input`
  padding: 0.5rem;
  border: none;
  border-radius: 3px;
`;

const Button = styled.button`
  font-family: 'Kanit', sans-serif;
  font-size: 18px;
  font-weight: bold;
  letter-spacing: 0.15rem;
  color: var(--light-yellow);
  background-color: var(--light-green);
  border: none;
  border-radius: 3px;
  padding: 0.4rem 1rem;
`;

const P = styled.p`
  display: flex;
  justify-content: center;
  color: var(--text-main);
`;

const A = styled(Link)`
  text-decoration: none;
  color: var(--light-yellow);
`;
