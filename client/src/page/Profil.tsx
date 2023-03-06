import React from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { LOGIN_ROUTE } from "../utils/consts";
import { Profile } from "../components/Profile";

const Profil: React.FC = () => {
  const { loading, error, user } = useTypeSelector((state) => state.user);
  const { projects } = useTypeSelector((state) => state.projects);
  const { modul } = useTypeSelector((state) => state.moduls);
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  return (
    <div className="container-main">
      <div className="title">Модули</div>
      <Profile user={user} module={modul} projects={projects} />
    </div>
  );
};
export { Profil };
