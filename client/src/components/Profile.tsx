import React from "react";
import { useLocation } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { RegistrationForm } from "../components/RegistrationForm";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { LOGIN_ROUTE } from "../utils/consts";
import { UserClientAttributes, UserModAttributes } from "../models/User";
import { Modul } from "./Modul";
import { modulStateType } from "../models/Modul";
import { ProjectStateAttributes, projectStateType } from "../models/Project";
type UserListProps = {
  user: UserClientAttributes | UserModAttributes | null;
  module: modulStateType | null;
  projects: ProjectStateAttributes[][] | null;
};
const Profile: React.FC<UserListProps> = ({ user, module, projects }) => {
  return (
    <div className="profile">
      <div className="profile__title">
        <p>Привет, {user?.full_name}</p>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M23.656 4.5C21.8229 4.5 20.2584 5.8253 19.9571 7.6335L19.774 8.73204C19.6803 9.2939 19.2741 9.74815 18.7407 9.94789C18.4162 10.0694 18.0971 10.2018 17.7837 10.3447C17.2652 10.5811 16.6564 10.5473 16.1927 10.216L15.286 9.56836C13.7943 8.50286 11.7509 8.67198 10.4547 9.96821L9.96825 10.4546C8.67202 11.7509 8.5029 13.7942 9.5684 15.2859L10.2161 16.1927C10.5473 16.6564 10.5811 17.2651 10.3447 17.7836C10.2018 18.097 10.0694 18.4162 9.9479 18.7407C9.74816 19.2741 9.29391 19.6803 8.73204 19.774L7.6335 19.957C5.8253 20.2584 4.5 21.8229 4.5 23.656V24.344C4.5 26.1771 5.8253 27.7416 7.6335 28.0429L8.73203 28.226C9.2939 28.3197 9.74815 28.7259 9.94789 29.2593C10.0694 29.5838 10.2018 29.9029 10.3447 30.2163C10.5811 30.7348 10.5472 31.3436 10.216 31.8073L9.56831 32.7141C8.50282 34.2058 8.67193 36.2491 9.96816 37.5454L10.4546 38.0318C11.7508 39.328 13.7942 39.4971 15.2859 38.4316L16.1927 37.784C16.6564 37.4527 17.2651 37.4189 17.7836 37.6553C18.097 37.7982 18.4162 37.9306 18.7407 38.0521C19.2741 38.2518 19.6803 38.7061 19.774 39.268L19.957 40.3665C20.2584 42.1747 21.8229 43.5 23.656 43.5H24.344C26.1771 43.5 27.7416 42.1747 28.0429 40.3665L28.226 39.268C28.3197 38.7061 28.7259 38.2519 29.2593 38.0521C29.5838 37.9306 29.9029 37.7982 30.2163 37.6553C30.7348 37.4189 31.3436 37.4527 31.8073 37.784L32.714 38.4316C34.2057 39.4971 36.2491 39.328 37.5453 38.0318L38.0317 37.5454C39.328 36.2491 39.4971 34.2058 38.4316 32.7141L37.7839 31.8073C37.4527 31.3436 37.4189 30.7349 37.6553 30.2164C37.7982 29.903 37.9306 29.5838 38.0521 29.2593C38.2518 28.7259 38.7061 28.3197 39.268 28.226L40.3665 28.043C42.1747 27.7416 43.5 26.1771 43.5 24.344V23.656C43.5 21.8229 42.1747 20.2584 40.3665 19.9571L39.268 19.774C38.7061 19.6803 38.2519 19.2741 38.0521 18.7407C37.9306 18.4162 37.7982 18.0971 37.6553 17.7837C37.4189 17.2652 37.4528 16.6564 37.784 16.1927L38.4317 15.2859C39.4972 13.7942 39.3281 11.7509 38.0318 10.4546L37.5454 9.9682C36.2492 8.67198 34.2058 8.50286 32.7141 9.56835L31.8073 10.216C31.3436 10.5473 30.7349 10.5811 30.2164 10.3447C29.903 10.2018 29.5838 10.0694 29.2593 9.9479C28.7259 9.74816 28.3197 9.29391 28.226 8.73205L28.043 7.6335C27.7416 5.8253 26.1771 4.5 24.344 4.5H23.656ZM24 31.5C28.1421 31.5 31.5 28.1421 31.5 24C31.5 19.8579 28.1421 16.5 24 16.5C19.8579 16.5 16.5 19.8579 16.5 24C16.5 28.1421 19.8579 31.5 24 31.5Z"
            fill="#6340B9"
          />
        </svg>
      </div>
      <div className="project__left">
        <div className="sub-title">Информация</div>
        <div className="text-project">
          ФИО: <strong>{user?.full_name}</strong>
        </div>
        <div className="text-project">
          Электронная почтау:<strong>{user?.email}</strong>
        </div>
        <div className="text-project">
          test:<strong>{user?.role}</strong>
        </div>
      </div>
      {module !== null ? (
        <Modul moduls={module} projects={projects} key={module.modul.id} />
      ) : (
        ""
      )}
    </div>
  );
};
export { Profile };
