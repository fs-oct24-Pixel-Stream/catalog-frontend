import { HashRouter as Router, Routes } from 'react-router';
import { App } from './App';
import { Route } from 'react-router';
// import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { DeviceDetailsPage } from './pages/DeviceDetailsPage/DeviceDetailsPage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { CartPage } from './pages/CartPage/CartPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';

// Before testing keep in mind to use # in url. e.g http://localHost/#/phones because of HashRouter.

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />{' '}
        {/* // TODO CREATE Home page */}
        <Route
          path="/phones"
          element={<PhonesPage />}
        >
          {/* TODO CREATE Phones Page*/}
          <Route
            path=":id"
            element={<DeviceDetailsPage />}
          />{' '}
          {/* TODO CREATE Device Details Page and IDvalidator func*/}
        </Route>
        <Route
          path="/accessories"
          element={<AccessoriesPage />}
        >
          {/* TODO CREATE AccessoriesPage*/}
          <Route
            path=":id"
            element={<DeviceDetailsPage />}
          />{' '}
          {/* TODO CREATE Device Details Page and IDvalidator func*/}
        </Route>
        <Route
          path="/tablets"
          element={<TabletsPage />}
        >
          {/* TODO CREATE Tablets Page*/}
          <Route
            path=":id"
            element={<DeviceDetailsPage />}
          />{' '}
          {/* TODO CREATE Device Details Page and IDvalidator func*/}
        </Route>
        <Route
          path="/favorites"
          element={<FavoritePage />}
        />
        {/* TODO CREATE Favorites Page*/}
        <Route
          path="/cart"
          element={<CartPage />}
        />
        {/* TODO CREATE Cart Page*/}
        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </Router>
);
