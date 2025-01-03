export interface AppState {
  sidedrawer: SideDrawerState;
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
