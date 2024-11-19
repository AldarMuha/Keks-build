import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { UserAuth } from '../../types/types';
import { loginUser } from '../../store/action';

function LoginPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: UserAuth = {
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    dispatch(loginUser(data));
  };
  return (
    <section className="login-page">
      <div className="login-page__header">
        <div className="login-page__img-wrap">
          <img
            className="login-page__img"
            src="img/svg/hero-keks.svg"
            width={727}
            height={569}
            alt="Картика кота."
          />
        </div>
      </div>
      <div className="login-page__content">
        <div className="login-page__inner">
          <h1 className="login-page__title">Вход</h1>
          <div className="login-page__form">
            <form action="https://grading.design.htmlacademy.pro" method="post" autoComplete="off" onSubmit={onSubmitHandler}>
              <div className="login-page__fields">
                <div className="custom-input login-page__field">
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
                <div className="custom-input login-page__field">
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
              </div>
              <button className="btn login-page__btn btn--large" type="submit">
                Войти
              </button>
            </form>
          </div>
          <p className="login-page__text-wrap">
            Ещё не зарегистрированы?
            <a className="login-page__link" href="register-page.html">
              Создайте
            </a>
            аккаунт прямо сейчас.
          </p>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
