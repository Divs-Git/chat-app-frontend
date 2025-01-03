export interface AppState {
  sidedrawer: SideDrawerState;
  snackbar: SnackbarState;
}

export interface SnackbarState {
  open: boolean | null;
  message: string | null;
  severity: 'success' | 'error' | 'warning' | 'info' | null;
}

export interface SideDrawerState {
  open: boolean;
  type: 'CONTACT' | 'STARRED' | 'SHARED';
}

export interface AuthState {
  isLogged: boolean;
  token: string;
  isLoading: boolean;
  email: string;
  error: boolean;
}

export interface RootState {
  app: AppState;
  auth: AuthState;
}
