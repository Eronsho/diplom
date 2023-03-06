import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { PopOpContract } from "../components/PopOpContract";
import { RegistrationForm } from "../components/RegistrationForm";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { LOGIN_ROUTE, ADD_NEW_CONTRACT, POPUP_ROUTE } from "../utils/consts";
import "./Admin.scss";
const Admin: React.FC = () => {
  const { loading, error, user } = useTypeSelector((state) => state.user);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const navigate = useNavigate();
  return (
    <div className="admin">
      <div className="title">Админ-панель</div>
      <div className="btn-group">
        <button className="btn" onClick={() => navigate(ADD_NEW_CONTRACT)}>
          Добавить договор
        </button>
        <button className="btn-decor" onClick={() => navigate(POPUP_ROUTE)}>
          Добавить модуль
        </button>
      </div>
      <div className="admin__content">
        <svg
          width="22"
          height="20"
          viewBox="0 0 22 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.5 4.375C3.5 2.09683 5.34683 0.25 7.625 0.25C9.90317 0.25 11.75 2.09683 11.75 4.375C11.75 6.65317 9.90317 8.5 7.625 8.5C5.34683 8.5 3.5 6.65317 3.5 4.375Z"
            fill="#0F172A"
          />
          <path
            d="M13.25 6.625C13.25 4.76104 14.761 3.25 16.625 3.25C18.489 3.25 20 4.76104 20 6.625C20 8.48896 18.489 10 16.625 10C14.761 10 13.25 8.48896 13.25 6.625Z"
            fill="#0F172A"
          />
          <path
            d="M0.5 17.125C0.5 13.19 3.68997 10 7.625 10C11.56 10 14.75 13.19 14.75 17.125V17.1276C14.75 17.1674 14.7496 17.2074 14.749 17.2469C14.7446 17.5054 14.6074 17.7435 14.3859 17.8768C12.4107 19.0661 10.0966 19.75 7.625 19.75C5.15343 19.75 2.8393 19.0661 0.864061 17.8768C0.642563 17.7435 0.505373 17.5054 0.501026 17.2469C0.500345 17.2064 0.5 17.1657 0.5 17.125Z"
            fill="#0F172A"
          />
          <path
            d="M16.2498 17.1281C16.2498 17.1762 16.2494 17.2244 16.2486 17.2722C16.2429 17.6108 16.1612 17.9378 16.0157 18.232C16.2172 18.2439 16.4203 18.25 16.6248 18.25C18.2206 18.25 19.732 17.8803 21.0764 17.2213C21.3234 17.1002 21.4843 16.8536 21.4957 16.5787C21.4984 16.5111 21.4998 16.4432 21.4998 16.375C21.4998 13.6826 19.3172 11.5 16.6248 11.5C15.8784 11.5 15.1711 11.6678 14.5387 11.9676C15.6135 13.4061 16.2498 15.1912 16.2498 17.125V17.1281Z"
            fill="#0F172A"
          />
        </svg>
        <p>Управление аккаунтами</p>
      </div>
    </div>
  );
};
export { Admin };
