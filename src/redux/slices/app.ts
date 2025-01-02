import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { AppState } from '../../types/authTypes';

const initialState: AppState = {
  sidedrawer: {
    open: false,
    type: 'CONTACT', // 'CONTACT' | 'STARRED' | 'SHARED'
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
    setSideDrawerType(
      state,
      action: PayloadAction<{ type: 'CONTACT' | 'STARRED' | 'SHARED' }>
    ) {
      state.sidedrawer.type = action.payload.type;
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

export function SetSideDrawerType(type: 'CONTACT' | 'STARRED' | 'SHARED') {
  return async (dispatch: AppDispatch) => {
    dispatch(slice.actions.setSideDrawerType({ type }));
  };
}
