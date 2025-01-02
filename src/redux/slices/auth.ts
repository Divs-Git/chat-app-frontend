import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios.ts';
import { AppDispatch } from '../store.ts';

const initialState = {
  isLoggedIn: false,
  token: '',
  isLoading: false,
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    logout(state) {
      state.isLoggedIn = false;
      state.token = '';
    },
    setLoading(state, action) {
      state.isLoading = action.payload.isLoading;
    },
  },
});

// Reducer
export default slice.reducer;

// Thunks
// Login
interface FormValues {
  email: string;
  password: string;
}

export function LoginUser(formValues: FormValues) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(
        '/auth/login',
        { ...formValues },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        dispatch(
          slice.actions.login({ isLoggedIn: true, token: response.data.token })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export function LogoutUser() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.logout());
  };
}
