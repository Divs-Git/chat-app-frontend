import { createSlice } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { AppState } from '../../types/authTypes';

type SideDrawerType = 'CONTACT' | 'STARRED' | 'SHARED';
type SnackbarSeverity = 'success' | 'error' | 'warning' | 'info';

const initialState: AppState = {
  sidedrawer: {
    open: false,
    type: 'CONTACT', // 'CONTACT' | 'STARRED' | 'SHARED'
  },
  snackbar: {
    open: null,
    message: null,
    severity: null,
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Toggle sidedrawer
    toggleSideDrawer(state) {
      state.sidedrawer.open = !state.sidedrawer.open;
    },
    setSideDrawerType(state, action) {
      state.sidedrawer.type = action.payload.type;
    },
    openSnackbar(state, action) {
      state.snackbar.open = true;
      state.snackbar.message = action.payload.message;
      state.snackbar.severity = action.payload.severity;
    },
    closeSnackbar(state) {
      state.snackbar.open = false;
      state.snackbar.message = null;
      state.snackbar.severity = null;
    },
  },
});

// Reducer
export default slice.reducer;

// Thunks
export function ToggleSideDrawer() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.toggleSideDrawer());
  };
}

export function SetSideDrawerType(type: SideDrawerType) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setSideDrawerType({ type }));
  };
}

interface ShowSnackbarProps {
  message: string;
  severity: SnackbarSeverity;
}

export function ShowSnackbar({ message, severity }: ShowSnackbarProps) {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.openSnackbar({ message, severity }));

    setTimeout(() => {
      dispatch(slice.actions.closeSnackbar());
    }, 4000);
  };
}

export function CloseSnackbar() {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.closeSnackbar());
  };
}
