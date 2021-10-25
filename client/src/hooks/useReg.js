import { useState } from 'react';

const useRegister = (submitCallback) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [avatar, setAvatar] = useState(false);
  const [fault, setFault] = useState('');
  const [name, setName] = useState(false);

  const clearFault = (time) => {
    setTimeout(() => {
      setFault('');
    }, time);
  };

  const handleChange = (e) => {
    e.persist();

    setState((state) => ({ ...state, [e.target.name]: e.target.value }));
    setName(true);
  };

  const handleSelected = (e) => {
    e.persist();
    let selected = e.target.value;
    setAvatar(true);
    setState({ ...state, [e.target.id]: selected });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      setFault('Please fill out the form');
      clearFault(3500);
      setState({ ...state });
    } else if (!avatar) {
      setFault('Please select an avatar');
      clearFault(3000);
      setState({ ...state });
    } else if (state.password !== state.confirmPassword) {
      setFault('Your passwords do not match');
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
