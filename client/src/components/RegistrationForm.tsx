import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addUseerClientRequest } from "../store/action-creators/user";
import { LOGIN_ROUTE } from "../utils/consts";
import "./Loginform.scss";
import "./Loginform.scss";

const RegistrationForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contract, setContract] = useState<number>(0);
  const [full_name, setFull_name] = useState<string>("");
  const dispatch = useDispatch();
  const history = useNavigate();
  const click = async () => {
    try {
      dispatch(addUseerClientRequest({ email, password, contract, full_name }));
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div className="auth">
      <div className="auth__container">
        <div className="title">Регистрация</div>

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
        <input
          type="number"
          className="input-auth"
          onChange={(e) => setContract(parseInt(e.target.value))}
          value={contract}
          placeholder="Номер договора"
        />
        <input
          type="text"
          className="input-auth"
          onChange={(e) => setFull_name(e.target.value)}
          value={full_name}
          placeholder="ФИО"
        />
        <button type="button" className="auth-btn" onClick={click}>
          Зарегистрироваться
        </button>
        <p className="auth__text">
          Уже зарегистрировались?
          <Link to={LOGIN_ROUTE} className="auth__title">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
};

export { RegistrationForm };
