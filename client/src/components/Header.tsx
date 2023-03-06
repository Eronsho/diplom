import "./Header.scss";
import serachLogo from "../assets/images/search-logo.png";
import belLogo from "../assets/images/bell.png";
import securityUser from "../assets/images/security-user.png";
import logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { logOutUser } from "../store/action-creators/user";
import { useDispatch } from "react-redux";
const Header: React.FC = () => {
  const navigate = useNavigate();
  const [opened, setOpened] = useState(false);
  const { user } = useTypeSelector((state) => state.user);
  const dispatch = useDispatch();

  const click = async () => {
    try {
      dispatch(logOutUser());
      navigate("/login");
    } catch (e) {
      alert(e);
    }
  };
  return (
    <header>
      <div className="header">
        <div className="container">
          <div className="header__left">
            <div
              className="logo-header"
              onClick={() => (user != null ? navigate("/") : "")}
            >
              <img src={logo} alt="logo" />
            </div>
          </div>
          {user != null ? (
            <div className="header__right">
              <div className="search-header">
                <div className="search-header__container">
                  <input
                    type="text"
                    className="search-header__content"
                    placeholder="Поиск..."
                  />
                  <img src={serachLogo} alt="" />
                </div>
              </div>
              <div className="notify-header">
                <img src={belLogo} alt="notify-logo" />
              </div>
              <div className="profil-header" onClick={() => setOpened(!opened)}>
                <div className="profil-header__container">
                  <div className="profil-header__content">
                    <div
                      className="profil-content"
                      style={opened === false ? { display: "none" } : {}}
                    >
                      <div
                        className="profil-content__name"
                        onClick={() => navigate("/profile")}
                      >
                        {user.full_name}
                      </div>
                      <ul className="profil-content__item">
                        <li
                          className="profil-content__list"
                          onClick={() => navigate("/admin")}
                        >
                          Настройки
                        </li>
                        <li className="profil-content__list">Статистика</li>
                        <li
                          className="profil-content__list"
                          onClick={() => click()}
                        >
                          Выйти
                        </li>
                      </ul>
                    </div>
                    <img src={securityUser} alt="" />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </header>
  );
};
export { Header };
