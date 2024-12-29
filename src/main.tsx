import { createRoot } from 'react-dom/client';
import './global.scss';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './redux/store.ts';

createRoot(document.getElementById('root')!).render(
  <ReduxProvider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ReduxProvider>
);
