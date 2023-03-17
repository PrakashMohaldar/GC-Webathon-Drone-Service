import { AUTH, LOGOUT } from '../constants/actionTypes';
import * as api from '../../api';

export const loadUser = () => async dispatch => {
  const localUser = JSON.parse(localStorage.getItem('user_info'));

  if (localUser) {
    dispatch({ type: AUTH, data: localUser });
  }
};

export const signin = (formData, history, setError) => async dispatch => {
  //login user
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data: {token: data.token, ...data.result}});
    history.push('/admin');
  } catch (err) {
    console.log(err.response.data.message);
    setError(err.response.data.message);
  }
};

export const signinGoogle = (accessToken, history) => async dispatch => {
  try {
    // login user
    const { data } = await api.signInGoogle(accessToken);

    dispatch({ type: AUTH, data });
    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

export const signup = (formData, history, setError) => async dispatch => {
  try {
    // signup user
    const { data } = await api.signUp(formData);
    dispatch({ type: AUTH, data: {token: data.token, ...data.result}});
    history.push('/admin');
  } catch (err) {
    setError(err.response.data.message);
  }
};

export const signupGoogle = (accessToken, history) => async dispatch => {
  try {
    // signup user

    const { data } = await api.signUpGoogle(accessToken);

    dispatch({ type: AUTH, data });
    history.push('/admin');
  } catch (err) {
    console.log(err);
  }
};

export const logout = (history) => async dispatch => {
  try {

    dispatch({ type: LOGOUT });
    history.push('/auth/');
  } catch (err) {
    console.log(err);
  }
};