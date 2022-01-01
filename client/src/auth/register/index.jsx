//? Removed the history import 1/1/22 as it is no longer used

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useRegister from '../../hooks/useRegister';
import { register } from '../../actions/user.actions';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { device } from '../../responsive';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa';

const Register = ({ location, history }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);
  const dispatch = useDispatch();

  const registration = () => {
    const { name, email, password, avatar } = value;

    dispatch(register(name, email, password, avatar));
  };

  const [value, fault, handleChange, handleSelected, handleSubmit] =
    useRegister(registration);

  const userReg = useSelector((state) => state.userReg);
  const { userInfo } = userReg; // todo bring in loading and error

  const redirect = location.search
    ? location.search.split('=')[1]
    : '/hermit-plus';

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  return (
    <SectionWrapper>
      <Container>
        <CharacterWrap>
          <img
            src='/images/gemini_minecraft_skin.png'
            alt='Gemini Tay would like you to register'
          />
        </CharacterWrap>
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
          <PassWrap>
            <Label htmlFor='password'>Password</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              value={value.password || ''}
              onChange={handleChange}
              placeholder='Password'
            />
            <small>
              Password must combine upper and lowercase <br /> letters, numbers
              at 8 characters long
            </small>
            {showPassword ? (
              <FaRegEyeSlash onClick={handleShowPassword} />
            ) : (
              <FaRegEye onClick={handleShowPassword} />
            )}
          </PassWrap>
          <InputWrap>
            <Label htmlFor='password'>Confirm Password</Label>
            <Input
              type={showPassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              value={value.confirmPassword || ''}
              onChange={handleChange}
              placeholder='Confirm Password'
            />
          </InputWrap>
          <ProfileWrap>
            <div>
              <Label htmlFor='avatar'>Avatar</Label>
              <FaceSelect id='avatar' onChange={handleSelected}>
                <option value='default' disabled=''></option>
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
                <option value='jack-o-lantern'>Jack-O-Lantern</option>
                <option value='slime'>Slime</option>
                <option value='spider'>Spider</option>
                <option value='stray'>Stray</option>
                <option value='villager'>Villager</option>
                <option value='zombie-pigman'>Zombie-Pigman</option>
              </FaceSelect>
            </div>
            <ProfileImg
              src={
                value.avatar
                  ? `/images/profile/${value.avatar}.png`
                  : '/images/profile/default.png'
              }
              alt='pic'
            />
          </ProfileWrap>
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

const CharacterWrap = styled.div`
  @media ${device.mobileL} {
    display: none;
  }
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

const PassWrap = styled(InputWrap)`
  position: relative;

  svg {
    position: absolute;
    font-size: 1.5rem;
    color: var(--smoke);
    top: 38%;
    right: 8%;
  }

  small {
    font-size: 12px;
    color: var(--text-main);
  }
`;

const ProfileWrap = styled(InputWrap)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
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
  display: block;
  font-family: 'Kanit', sans-serif;
  font-size: 16px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  width: 100%;
  max-width: 100%; /* useful when width is set to anything other than 100% */
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.2em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%2396a61c%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E'),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  /* arrow icon position (1em from the right, 50% vertical) , then gradient position*/
  background-position: right 0.7em top 50%, 0 0;
  /* icon size, then gradient */
  background-size: 0.65em auto, 100%;

  &::-ms-expand {
    display: none;
  }

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #aaa;
    /* It'd be nice to use -webkit-focus-ring-color here but it doesn't work on box-shadow */
    box-shadow: 0 0 1px 3px var(--primary-light-color);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }

  option {
    font-weight: normal;

    &:hover {
      background: var(--primary-light-color);
    }
  }
`;

const ProfileImg = styled.img`
  width: 75px;
  border-radius: 10%;
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
  height: 1rem;
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
