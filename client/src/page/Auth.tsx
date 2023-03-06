import React from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { LOGIN_ROUTE } from "../utils/consts";

const Auth: React.FC = () => {
  const { loading, error, user } = useTypeSelector((state) => state.user);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div>
      {isLogin ? (
        <LoginForm user={user} loading={loading} />
      ) : (
        <RegistrationForm />
      )}
    </div>
  );
};
export { Auth };
