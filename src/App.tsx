import { Snackbar } from '@mui/material';
import Router from './routes';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/authTypes';
import { AppDispatch } from './redux/store';
import { CloseSnackbar } from './redux/slices/app';

export default function App() {
  const { open, severity, message } = useSelector(
    (state: RootState) => state.app.snackbar
  );
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Router />
      {open && message ? (
        <Snackbar
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          open={open || false}
          autoHideDuration={4000}
          onClose={() => {
            dispatch(CloseSnackbar());
          }}
        >
          <Alert
            onClose={() => {
              dispatch(CloseSnackbar());
            }}
            severity={severity || 'info'}
            variant='filled'
            sx={{ width: '100%' }}
          >
            {message}
          </Alert>
        </Snackbar>
      ) : (
        <> </>
      )}
    </>
  );
}
