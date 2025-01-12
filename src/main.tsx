import { createRoot } from 'react-dom/client';
import './index.scss';
import { Root } from './Root';
import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
const container = document.getElementById('root') as HTMLElement;

createRoot(container).render(
  <Provider store={store}>
    <StrictMode>
      <Root />
    </StrictMode>
  </Provider>,
);
