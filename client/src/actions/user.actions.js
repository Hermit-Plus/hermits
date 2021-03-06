import axios from 'axios';
import actionTypes from '../action_types/action.types';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_LOGIN_REQUEST
    });
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    );

    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data
    });

    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({
    type: actionTypes.USER_LOGOUT
  });
  dispatch({
    type: actionTypes.USER_DETAILS_RESET
  });
};

export const register = (name, email, password, avatar) => async (dispatch) => {
  try {
    dispatch({
      type: actionTypes.USER_REGISTER_REQUEST
    });
    const config = {
      header: {
        'Content-Type': 'application/json'
      }
    };
    const { data } = await axios.post(
      'api/users',
      { name, email, password, avatar },
      config
    );
    dispatch({
      type: actionTypes.USER_REGISTER_SUCCESS,
      payload: data
    });
    dispatch({
      type: actionTypes.USER_LOGIN_SUCCESS,
      payload: data
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actionTypes.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};
