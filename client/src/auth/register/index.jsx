import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import history from '../../history';
import { useDispatch, useSelector } from 'react-redux';

import { register } from '../../actions/user.actions';

import styled from 'styled-components';

const Register = ({ location, history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oops, setOops] = useState(null);

  const dispatch = useDispatch();
  const userReg = useSelector((state) => state.userReg);
  const { loading, error, userInfo } = userReg;

  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setOops('Passwords do not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

  return (
    <SectionWrapper>
      <Container>
        <div>
          <img src='/images/gemini_minecraft_skin.png' />
        </div>
        <form onSubmit={handleSubmit} className='signIn-form'>
          <Ooops>{oops}</Ooops>
          <LoginTitle>Register</LoginTitle>
          <InputWrap>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Name'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='password'>Confirm Password</Label>
            <Input
              type='password'
              id='confirmPassword'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Those blocks don't stack"
            />
          </InputWrap>
          <ButtonWrap>
            <Button type='submit'>place block</Button>
          </ButtonWrap>
        </form>
      </Container>
      <P>
        Already have an account? &nbsp;<A to='/login'> Log In</A>&nbsp; now!
      </P>
    </SectionWrapper>
  );
};

export default Register;

const SectionWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
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
  margin-bottom: 1rem;
  color: var(--dark-yellow);
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const ButtonWrap = styled.div`
  margin: 1.5rem 0;
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

const Ooops = styled.p`
  color: var(--light-yellow);
  height: 1rem;
  width: 225px;
`;
