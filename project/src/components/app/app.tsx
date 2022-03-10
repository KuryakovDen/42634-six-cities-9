import MainScreen from '../../screens/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute, AuthStatus} from '../../const';
import LoginScreen from '../../screens/login-screen/login-screen';
import FavoritesScreen from '../../screens/favorites-screen/favorites-screen';
import PrivateRoute from '../private-route/private-route';
import OfferScreen from '../../screens/offer-screen/offer-screen';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import {Review} from '../../types/review';
import {useAppDispatch} from '../../hooks';
import {useEffect} from 'react';
import {loadOffers} from '../../store/action';

type AppProps = {
  reviews: Review[];
};

function App({ reviews }: AppProps): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadOffers([]));
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={AuthStatus.NoAuth}><FavoritesScreen offers={[]} /></PrivateRoute>} />
        <Route path={AppRoute.OfferId} element={<OfferScreen authStatus={AuthStatus.Auth} reviews={reviews} />} />
        <Route path={'*'} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
