import { createRoot } from 'react-dom/client';
import './index.scss';
import { Root } from './Root';
import { StrictMode } from 'react';
const container = document.getElementById('root') as HTMLElement;



createRoot(container).render(
  <StrictMode>
    <Root/>
  </StrictMode>
);

