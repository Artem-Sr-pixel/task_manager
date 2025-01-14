import { useState } from "react";
import st from "./Authorization.module.css";

function Authorization() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <section className="container">
      <div className={st.formWrap}>
        {isLoginForm && (
          <form action="" className={st.formAuth}>
            <h2>Авторизация</h2>
            <input type="text" placeholder="Логин" />
            <input type="password" placeholder="Пароль" />
            <button type="submit">Войти</button>

            <p className={st.switchFormText}>
              Еще нет аккаунта?{" "}
              <span onClick={toggleForm} className={st.switchFormLink}>
                Зарегистрироваться
              </span>
            </p>
          </form>
        )}

        {!isLoginForm && (
          <form action="" className={st.formAuth}>
            <h2>Регистрация</h2>
            <input type="text" placeholder="Логин" />
            <input type="email" placeholder="Почта" />
            <input type="password" placeholder="Пароль" />
            <input type="password" placeholder="Подтвердите пароль" />
            <button type="submit">Зарегистрироваться</button>

            <p className={st.switchFormText}>
              Уже есть аккаунт?{" "}
              <span onClick={toggleForm} className={st.switchFormLink}>
                Войти
              </span>
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

export default Authorization;