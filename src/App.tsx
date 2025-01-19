import { Outlet, useLocation } from 'react-router';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Header } from './components/Header/Header';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

export const App = () => {
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    dispatch(fetchProducts());
    document.documentElement.className = theme;
  }, [theme]);
  const location = useLocation();
  console.log(location);

  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        <TransitionGroup>
          <CSSTransition
            key={location.pathname.split('/')[1]}
            timeout={700}
            classNames={{
              enter: 'app-enter',
              enterActive: 'app-enter-active',
              exit: 'app-exit',
              exitActive: 'app-exit-active',
            }}
          >
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      </main>
      <Footer />
    </div>
  );
};
