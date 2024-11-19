import { Link } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus, getIsUserStatusLoading, getUser } from '../../store/user-process/selectors';
import Spinner from '../spinner/spinner';
import { logoutUser } from '../../store/action';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isUserStatusLoading = useAppSelector(getIsUserStatusLoading);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();
  const unauthorizatedHandler = () => {
    dispatch(logoutUser());
  };
  if (isUserStatusLoading) {
    return <Spinner />;
  }
  if (authorizationStatus === AuthorizationStatus.NoAuth) {
    return (
      <header className="header">
        <div className="container">
          <div className="header__inner"><a className="header__logo" href="index.html" aria-label="Переход на главную"><img src="img/svg/logo.svg" width="170" height="69" alt="Кондитерская кекс" /></a>
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
              src="img/svg/logo.svg"
              width={170}
              height={69}
              alt="Кондитерская кекс"
            />
          </span>
          <div className="header__user-info-wrap">
            <div className="header__user-info">
              <div className="header__user-avatar">
                <picture>
                  <source
                    type="image/webp"
                    srcSet="img/content/user-avatar.webp, img/content/user-avatar@2x.webp 2x"
                  />
                  <img
                    src="img/content/user-avatar.jpg"
                    srcSet="img/content/user-avatar@2x.jpg 2x"
                    width={62}
                    height={62}
                    alt="Аватар пользователя."
                  />
                </picture>
              </div>
              <p className="header__user-mail">{user}</p>
            </div>
          </div>
          <div className="header__buttons">
            <a className="header__favourite" href="#">
              <span className="header__favourite-icon">
                <svg width={33} height={29} aria-hidden="true">
                  <use xlinkHref="#icon-favourite" />
                </svg>
              </span>
              <span className="header__favourite-number">2</span>
              <span className="visually-hidden">Избранное</span>
            </a>
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
