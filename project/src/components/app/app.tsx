import MainScreen from '../../screens/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import LoginScreen from '../../screens/login-screen/login-screen';
import FavoritesScreen from '../../screens/favorites-screen/favorites-screen';
import PrivateRoute from '../private-route/private-route';
import OfferScreen from '../../screens/offer-screen/offer-screen';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';

type AppProps = {
  placesCount: number;
};

function App({ placesCount }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen placesCount={placesCount} />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><FavoritesScreen /></PrivateRoute>} />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route path={'*'} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
