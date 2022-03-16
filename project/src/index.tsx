import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, loadOffersAction} from './store/api-actions';
import ErrorMessage from './components/error-message/error-message';

store.dispatch(loadOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App reviews={reviews} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
