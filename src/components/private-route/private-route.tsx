import { Navigate } from 'react-router-dom';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import Spinner from '../spinner/spinner';
import { getAuthorizationStatus, getIsUserStatusLoading } from '../../store/user-process/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute({ children }: PrivateRouteProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userStatusLoading = useAppSelector(getIsUserStatusLoading);
  if (userStatusLoading) {
    return <Spinner />;
  }
  return (
    (authorizationStatus === AuthorizationStatus.Auth)
      ? children
      : <Navigate to={AppRoute.Login} />
  );
}

export default PrivateRoute;
