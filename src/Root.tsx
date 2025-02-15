import { HashRouter as Router, Routes } from 'react-router';
import { App } from './App';
import { Route } from 'react-router';
import { PhonesPage } from './pages/PhonesPage/PhonesPage';
import { HomePage } from './pages/HomePage/HomePage';
import { TabletsPage } from './pages/TabletsPage/TabletsPage';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage';
import { FavoritePage } from './pages/FavoritePage/FavoritePage';
import { CartPage } from './pages/CartPage/CartPage';
import { AccessoriesPage } from './pages/AccessoriesPage/AccessoriesPage';
import { RightsPage } from './pages/RightsPage/RightsPage';
import { ContactsPage } from './pages/ContactsPage/ContactsPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage/ProductDetailsPage';

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
        />

        <Route path="phones">
          <Route
            index
            element={<PhonesPage />}
          />
          <Route
            path=":itemId"
            element={<ProductDetailsPage />}
          />
        </Route>

        <Route path="/accessories">
          <Route
            index
            element={<AccessoriesPage />}
          />
          <Route
            path=":itemId"
            element={<ProductDetailsPage />}
          />
        </Route>

        <Route path="/tablets">
          <Route
            index
            element={<TabletsPage />}
          />
          <Route
            path=":itemId"
            element={<ProductDetailsPage />}
          />
        </Route>

        <Route
          path="/favorites"
          element={<FavoritePage />}
        />

        <Route
          path="/cart"
          element={<CartPage />}
        />

        <Route
          path="/rights"
          element={<RightsPage />}
        />

        <Route
          path="/contacts"
          element={<ContactsPage />}
        />

        <Route
          path="*"
          element={<NotFoundPage />}
        />
      </Route>
    </Routes>
  </Router>
);
