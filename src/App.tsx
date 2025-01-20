import { Outlet } from 'react-router';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Header } from './components/Header/Header';
import i18n from './utils/config/i18n';
// import { TransitionGroup } from 'react-transition-group';

export const App = () => {
  const dispatch = useAppDispatch();
  const currentLanguage = useAppSelector((state) => state.language.lang);
  const theme = useAppSelector((state) => state.theme.theme);

  useEffect(() => {
    dispatch(fetchProducts());
    document.documentElement.className = theme;
    i18n.changeLanguage(currentLanguage || 'en');
  }, [theme, currentLanguage]);

  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        {/* <TransitionGroup> */}
        <Outlet />
        {/* </TransitionGroup> */}
      </main>
      <Footer />
    </div>
  );
};
