import {AppRoute, AuthStatus} from '../../const';
import {Navigate, RouteProps} from 'react-router-dom';
import {useAppSelector} from '../../hooks';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  const authStatusLoading = useAppSelector(({AUTH}) => AUTH.isAuthStatusLoading);

  if (!authStatusLoading) {
    return <Spinner />;
  }

  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
