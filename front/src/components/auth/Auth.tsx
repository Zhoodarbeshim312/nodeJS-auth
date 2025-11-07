import { useState } from "react";
import scss from "./Auth.module.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  return (
    <section className={scss.Auth}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.card}>
            <div className={scss.tabs}>
              <button
                className={!isLogin ? scss.active : ""}
                onClick={() => setIsLogin(false)}
              >
                Register
              </button>
              <button
                className={isLogin ? scss.active : ""}
                onClick={() => setIsLogin(true)}
              >
                Login
              </button>
            </div>
            {!isLogin ? (
              <div className={scss.registration}>
                <h1>Create Account</h1>
                <form className={scss.form}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <div className={scss.passwordField}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                    <span onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <LuEyeOff /> : <LuEye />}
                    </span>
                  </div>
                  <div className={scss.passwordField}>
                    <input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Подтвердите пароль"
                      required
                    />
                    <span onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <LuEyeOff /> : <LuEye />}
                    </span>
                  </div>
                  <button type="submit">Зарегистрироваться</button>
                </form>
              </div>
            ) : (
              <div className={scss.login}>
                <h1>Welcome Back</h1>
                <form className={scss.form}>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <div className={scss.passwordField}>
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Пароль"
                      required
                    />
                    <span
                      onClick={() => setShowLoginPassword(!showLoginPassword)}
                    >
                      {showLoginPassword ? <LuEyeOff /> : <LuEye />}
                    </span>
                  </div>
                  <div className={scss.options}>
                    <a href="#">Забыли пароль?</a>
                  </div>
                  <button type="submit">Войти</button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
