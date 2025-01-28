import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { registrationUser } from '../../store/action';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

function RegisterPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    dispatch(registrationUser(formData));
    navigate(AppRoute.Login);
  };

  return (
    <section className="register-page">
      <div className="register-page__header">
        <div className="register-page__img-wrap">
          <img
            className="register-page__img"
            src="img/svg/hero-keks.svg"
            width={727}
            height={569}
            alt="Картика кота."
          />
        </div>
      </div>
      <div className="register-page__content">
        <div className="register-page__inner">
          <h1 className="register-page__title">Регистрация</h1>
          <div className="register-page__form">
            <form action="https://grading.design.htmlacademy.pro" method="post" autoComplete="off" onSubmit={onSubmitHandler}>
              <div className="register-page__fields">
                <div className="custom-input register-page__field">
                  <label>
                    <span className="custom-input__label">Введите ваше имя</span>
                    <input
                      type="text"
                      name="user-name"
                      placeholder="Имя"
                      required
                    />
                  </label>
                </div>
                <div className="custom-input register-page__field">
                  <label>
                    <span className="custom-input__label">Введите вашу почту</span>
                    <input
                      type="email"
                      name="email"
                      placeholder="Почта"
                      required
                    />
                  </label>
                </div>
                <div className="custom-input register-page__field">
                  <label>
                    <span className="custom-input__label">Введите ваш пароль</span>
                    <input
                      type="password"
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                  </label>
                </div>
                <div className="custom-input register-page__field">
                  <label>
                    <span className="custom-input__label">Введите ваше имя</span>
                    <input
                      type="file"
                      name="avatar"
                      data-text="Аватар"
                      accept="image/jpeg"
                    />
                  </label>
                </div>
              </div>
              <button className="btn register-page__btn btn--large" type="submit">
                Зарегистрироваться
              </button>
            </form>
          </div>
          <p className="register-page__text-wrap">
            Уже зарегистрированы?
            <Link className="register-page__link" to={AppRoute.Login}>
              Войдите
            </Link>
            в свой аккаунт.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
