import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getIsUserStatusLoading, getUser } from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';
import { logoutUser } from '../../store/action';
import { getFavorites } from '../../store/site-data/selectors';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserStatusLoading = useAppSelector(getIsUserStatusLoading);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);
  const unauthorizatedHandler = () => {
    dispatch(logoutUser());
  };
  if (isUserStatusLoading) {
    return <Spinner />;
  }
  if (authorizationStatus === AuthorizationStatus.NoAuth && user === null) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <Link className="header__logo" to={AppRoute.Root} aria-label="Переход на главную">
              <img src="../img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" />
            </Link>
            <div className="header__buttons">
              <div className="header__btn">
                <Link className="btn btn--third header__link header__link--reg" to={AppRoute.Registre}>Регистрация</Link>
              </div>
              <div className="header__btn">
                <Link className="btn" to={AppRoute.Login}>Войти</Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="header header--authorized">
      <div className="container">
        <div className="header__inner">
          <span className="header__logo">
            <img
              src="/img/svg/logo.svg"
              width={170}
              height={69}
              alt="Кондитерская кекс"
            />
          </span>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <img
                  src={user?.avatarUrl}
                  width={62}
                  height={62}
                  alt="Аватар пользователя."
                />
              </div>
              <p className="header__user-mail">{user?.email}</p>
            </div>
          </div>
          <div className="header__buttons">
            <Link className="header__favourite" to={AppRoute.Favorites}>
              <span className="header__favourite-icon">
                <svg width={33} height={29} aria-hidden="true">
                  <use xlinkHref="#icon-favourite" />
                </svg>
              </span>
              <span className="header__favourite-number">{favorites.length}</span>
              <span className="visually-hidden">Избранное</span>
            </Link>
            <div className="header__buttons-authorized">
              <div className="header__btn">
                <button className="btn btn--second" onClick={unauthorizatedHandler}>
                  Выйти
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
