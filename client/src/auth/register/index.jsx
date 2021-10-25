import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useReg';
// import history from '../../history';
// import { useDispatch, useSelector } from 'react-redux';

// import { register } from '../../actions/user.actions';

import styled from 'styled-components';

const Register = ({ location, history }) => {
  const registration = () => {
    if (!value) {
      alert('nothing here');
    } else {
      console.log(value);
    }

    // if (value.password !== value.confirmPassword) {
    //   setOops('Passwords do not match');
    // } else {
    //   dispatch(register(name, email, password));
    // }
  };

  const [value, fault, handleChange, handleSelected, handleSubmit] =
    useRegister(registration);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  // const [oops, setOops] = useState(null);

  // const dispatch = useDispatch();
  // const userReg = useSelector((state) => state.userReg);
  // const { loading, error, userInfo } = userReg;

  // const redirect = location.search ? location.search.split('=')[1] : '/';

  // useEffect(() => {
  //   if (userInfo) {
  //     history.push(redirect);
  //   }
  // }, [history, userInfo, redirect]);

  return (
    <SectionWrapper>
      <Container>
        <div>
          <img src='/images/gemini_minecraft_skin.png' />
        </div>
        <form onSubmit={handleSubmit} className='signIn-form'>
          <ShowFault>{fault}</ShowFault>
          <LoginTitle>Register</LoginTitle>
          <InputWrap>
            <Label htmlFor='name'>Name</Label>
            <Input
              type='text'
              id='name'
              name='name'
              value={value.name || ''}
              onChange={handleChange}
              placeholder='Name'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='email'>Email</Label>
            <Input
              type='email'
              id='email'
              name='email'
              value={value.email || ''}
              onChange={handleChange}
              placeholder='Email'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='password'>Password</Label>
            <Input
              type='password'
              id='password'
              name='password'
              value={value.password || ''}
              onChange={handleChange}
              placeholder='Password'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='password'>Confirm Password</Label>
            <Input
              type='password'
              id='confirmPassword'
              name='confirmPassword'
              value={value.confirmPassword || ''}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
          </InputWrap>
          <InputWrap>
            <Label htmlFor='avatar'>Avatar</Label>
            <FaceSelect id='avatar' onChange={handleSelected}>
              <option value=''></option>
              <option value='steve'>Steve</option>
              <option value='bat'>Bat</option>
              <option value='cow'>Cow</option>
              <option value='mooshroom'>Mooshroom</option>
              <option value='pig'>Pig</option>
              <option value='sheep'>Sheep</option>
              <option value='wolf'>Wolf</option>
              <option value='drown'>Drown</option>
              <option value='enderman'>Enderman</option>
              <option value='ghast'>Ghast</option>
              <option value='husk'>Husk</option>
              <option value='jack'>Jack-O-Lantern</option>
              <option value='slime'>Slime</option>
              <option value='spider'>Spider</option>
              <option value='stray'>Stray</option>
              <option value='villager'>Villager</option>
              <option value='zombie-pigman'>Zombie-Pigman</option>
            </FaceSelect>
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

const FaceSelect = styled.select`
  font-family: 'Kanit', sans-serif;
  border: none;
  font-size: 16px;
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

const ShowFault = styled.h4`
  color: var(--light-yellow);
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
