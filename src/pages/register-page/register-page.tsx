import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { UserRegistration } from '../../types/types';
import { registrationUser } from '../../store/action';

function RegisterPage(): JSX.Element {
  const dispatch = useAppDispatch();
  const onSubmitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data: UserRegistration = {
      name: formData.get('user-name') as string,
      email: formData.get('email') as string,
      password: formData.get('password') as string,
    };
    dispatch(registrationUser(data));
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
                      name="user-name-1"
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
            <a className="register-page__link" href="login-page.html">
              Войдите
            </a>
            в свой аккаунт.
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
