import { createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios.ts';
import { AppDispatch } from '../store.ts';
import { RootState } from '../../types/authTypes.ts';

const initialState = {
  isLoggedIn: false,
  token: '',
  isLoading: false,
  email: '',
  error: '',
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
    updateIsLoading(state, action) {
      state.error = action.payload.error;
      state.isLoading = action.payload.isLoading;
    },
    updateRegisterEmail(state, action) {
      state.email = action.payload.email;
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

export function ForgotPassword(formValues: { email: string }) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(
        '/auth/forgot-password',
        { ...formValues },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

interface NewPasswordFormValues {
  password: string;
  confirmPassword: string;
  token: string;
}

export function NewPassword(formValues: NewPasswordFormValues) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(
        '/auth/reset-password',
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

interface RegisterFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export function RegisterUser(formValues: RegisterFormValues) {
  return async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(slice.actions.updateIsLoading({ isLoading: true, error: false }));
    await axios
      .post(
        '/auth/register',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then((response) => {
        dispatch(
          slice.actions.updateRegisterEmail({ email: formValues.email })
        );
        dispatch(
          slice.actions.updateIsLoading({ isLoading: true, error: false })
        );
      })
      .catch((error) => {
        console.log(error);
        dispatch(
          slice.actions.updateIsLoading({ isLoading: false, error: true })
        );
      })
      .finally(() => {
        if (!getState().auth.error) {
          window.location.href = '/auth/verify';
        }
      });
  };
}

export function VerifyEmail(formValues: { otp: string; email: string }) {
  return async (dispatch: AppDispatch) => {
    await axios
      .post(
        '/auth/verify',
        { ...formValues },
        { headers: { 'Content-Type': 'application/json' } }
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
