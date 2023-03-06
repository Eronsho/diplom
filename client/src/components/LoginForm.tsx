/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { UserClientAttributes, UserModAttributes } from "../models/User";
import {
  addLoginUseerClientRequest,
  addLoginUseerModRequest,
} from "../store/action-creators/user";
import { RECOVERY_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import "./Loginform.scss";
type UserListProps = {
  loading: boolean;
  user: UserClientAttributes | UserModAttributes | null;
};
const LoginForm: React.FC<UserListProps> = ({ user, loading }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const click = async () => {
    try {
      dispatch(addLoginUseerModRequest({ email, password }));
      navigate("/");
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="title">Вход</div>

        <input
          type="email"
          className="input-auth"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          placeholder="Email"
        />
        <input
          type="password"
          className="input-auth"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          placeholder="Пароль"
        />
        <Link to={RECOVERY_ROUTE} className="auth__text-decor">
          Забыли пароль?
        </Link>

        <button
          disabled={loading}
          type="button"
          className="auth-btn"
          onClick={click}
        >
          Войти
        </button>
        <p className="auth__text">
          <Link to={REGISTRATION_ROUTE} className="auth__title">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
};

export { LoginForm };
