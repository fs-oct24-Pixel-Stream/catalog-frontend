import { Outlet, useLocation } from 'react-router';
import { Footer } from './components/Footer/Footer';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { useEffect, useRef } from 'react';
import { fetchProducts } from './features/products/productsSlice';

import 'bulma/css/bulma.css';
import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import './App.scss';

import { Header } from './components/Header/Header';

import { CSSTransition, SwitchTransition } from 'react-transition-group';
import i18n from './utils/config/i18n';
import { fetchTablets } from './features/tablets/tabletsSlice';
import { fetchPhones } from './features/phones/phonesSlice';
import { fetchAccessories } from './features/accessories/accessoriesSlice';

export const App = () => {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const currentLanguage = useAppSelector((state) => state.language.lang);

  const theme = useAppSelector((state) => state.theme.theme);
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchTablets());
    dispatch(fetchPhones());
    dispatch(fetchAccessories());
  }, []);

  useEffect(() => {
    document.documentElement.className = theme;
    i18n.changeLanguage(currentLanguage || 'en');
  }, [theme]);

  const nodeRef = useRef(null);

  const isAnimationEnabled = location.pathname.split('/').length === 3;

  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        {!isAnimationEnabled ?
          <SwitchTransition>
            <CSSTransition
              in={true}
              key={location.pathname}
              timeout={500}
              classNames="app"
              nodeRef={nodeRef}
              unmountOnExit
              mountOnEnter
            >
              <div ref={nodeRef}>
                <Outlet />
              </div>
            </CSSTransition>
          </SwitchTransition>
        : <Outlet />}
      </main>
      <Footer />
    </div>
  );
};

//   return (
//     <div className="body-ajustment">
//       <Header />
//       <main className="main">
//         <Outlet />
//       </main>
//       <Footer />
//     </div>
//   );
// };
