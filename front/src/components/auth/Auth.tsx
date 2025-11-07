import { useState } from "react";
import scss from "./Auth.module.scss";
import { LuEye, LuEyeOff } from "react-icons/lu";
import axios from "axios";

const Auth = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirm, setShowConfirm] = useState<boolean>(false);
  const [showLoginPassword, setShowLoginPassword] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const register = async () => {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Заполните пустые ячейки!");
      return;
    }
    if (password !== confirmPassword) {
      alert("Пароли не совпадают!");
      return;
    }
    try {
      await axios.post(`http://localhost:5000/api/v1/auth/register`, {
        username,
        email,
        password,
      });
      setUsername("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert("Регистрация прошла успешно!");
    } catch (error) {
      console.error(error);
      alert("Ошибка при регистрации");
      console.log(error);
    }
  };

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
                <div className={scss.form}>
                  <input
                    type="text"
                    name="username"
                    placeholder="Имя пользователя"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className={scss.passwordField}>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Пароль"
                      onChange={(e) => setPassword(e.target.value)}
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
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <span onClick={() => setShowConfirm(!showConfirm)}>
                      {showConfirm ? <LuEyeOff /> : <LuEye />}
                    </span>
                  </div>
                  <button onClick={register}>Зарегистрироваться</button>
                </div>
              </div>
            ) : (
              <div className={scss.login}>
                <h1>Welcome Back</h1>
                <div className={scss.form}>
                  <input type="email" name="email" placeholder="Email" />
                  <div className={scss.passwordField}>
                    <input
                      type={showLoginPassword ? "text" : "password"}
                      name="password"
                      placeholder="Пароль"
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
                  <button>Войти</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Auth;
