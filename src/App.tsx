import 'bulma/css/bulma.css';

import '../src/styles/utils/variable.scss';
import '../src/styles/utils/mixins.scss';
import { Outlet } from 'react-router';

import './App.scss';
import { Header } from './components/Header/Header';

import { Footer } from './components/Footer/Footer';

export const App = () => {
  return (
    <div className="body-ajustment">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
