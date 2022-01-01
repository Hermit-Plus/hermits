import { useState } from 'react';

const passwordValidation = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;

const useRegister = (submitCallback) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    avatar: ''
  });
  const [fault, setFault] = useState('');

  const clearFault = (time) => {
    setTimeout(() => {
      setFault('');
    }, time);
  };

  const handleChange = (e) => {
    e.persist();

    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const handleSelected = (e) => {
    e.persist();
    let selected = e.target.value;
    setState({ ...state, [e.target.id]: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.name === '' || state.password === '') {
      setFault('Please fill out the form');
      clearFault(3500);
      setState({ ...state });
    } else if (!passwordValidation.test(state.password)) {
      setFault('Password failed checks');
      clearFault(5000);
    } else if (state.avatar === '' || state.avatar === 'default') {
      setFault('Please select an avatar');
      clearFault(3000);
      setState({ ...state });
    } else if (state.password !== state.confirmPassword) {
      setFault('Your passwords did not match');
      clearFault(4000);
      setState({ ...state, password: '', confirmPassword: '' });
    } else {
      submitCallback();
      setState({});
    }
  };
  return [state, fault, handleChange, handleSelected, handleSubmit];
};

export default useRegister;
