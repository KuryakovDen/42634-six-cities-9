import {AppRoute, AuthStatus} from '../../const';
import {Navigate, RouteProps} from 'react-router-dom';

type PrivateRouteProps = RouteProps & {
  authStatus: AuthStatus;
  children: JSX.Element;
}

function PrivateRoute({ authStatus, children }: PrivateRouteProps): JSX.Element {
  return authStatus === AuthStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
