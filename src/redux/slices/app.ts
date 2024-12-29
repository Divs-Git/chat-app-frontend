import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    setSidebarType(state, action) {
      state.sidebar.type = action.payload.type;
    },
  },
});

// Reducer
export default slice.reducer;
