import MainScreen from '../../screens/main-screen/main-screen';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import LoginScreen from '../../screens/login-screen/login-screen';
import FavoritesScreen from '../../screens/favorites-screen/favorites-screen';
import PrivateRoute from '../private-route/private-route';
import OfferScreen from '../../screens/offer-screen/offer-screen';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import {useAppDispatch, useAppSelector} from '../../hooks';
import React, {useEffect} from 'react';
import {loadOffers} from '../../store/offer/offer';
import {setLocationList} from '../../store/city/city';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector(({ AUTH }) => AUTH.authStatus);
  const offerList = useAppSelector(({OFFER}) => OFFER.offerList);
  const offerListLoaded = useAppSelector(({OFFER}) => OFFER.isOfferListLoaded);
  const locations = [...new Set(offerList.map((offer) => offer.city.name))];

  useEffect(() => {
    dispatch(loadOffers([]));
  }, []);

  useEffect(() => {
    dispatch(setLocationList(locations.sort()));
  }, [offerListLoaded]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppRoute.Main} element={<MainScreen />} />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Favorites} element={<PrivateRoute authStatus={authStatus}><FavoritesScreen /></PrivateRoute>} />
        <Route path={AppRoute.OfferId} element={<OfferScreen />} />
        <Route path={AppRoute.NotFound} element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
