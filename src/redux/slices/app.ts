import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';

interface SidebarState {
  open: boolean;
  type: 'CONTACT' | 'STARRED' | 'SHARED';
}

interface AppState {
  sidebar: SidebarState;
}

const initialState: AppState = {
  sidebar: {
    open: false,
    type: 'CONTACT', // 'CONTACT' | 'STARRED' | 'SHARED'
  },
};

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    // Toggle sidebar
    toggleSideDrawer(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    setSideDrawerType(
      state,
      action: PayloadAction<{ type: 'CONTACT' | 'STARRED' | 'SHARED' }>
    ) {
      state.sidebar.type = action.payload.type;
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
