import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import CatalogPage from '../../pages/catalog-page/catalog-page';
import ProductPage from '../../pages/product-page/product-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import { AppRoute } from '../../const';
import RegisterPage from '../../pages/register-page/register-page';
import LoginPage from '../../pages/login-page/login-page';
import PrivateRoute from '../private-route/private-route';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.Catalog}
          element={<CatalogPage />}
        />
        <Route
          path={`${AppRoute.ProductPage}/:id`}
          element={<ProductPage />}
        />

        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute>
              <FavoritesPage />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.Registre}
          element={<RegisterPage />}
        />
        <Route
          path={AppRoute.Login}
          element={<LoginPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
