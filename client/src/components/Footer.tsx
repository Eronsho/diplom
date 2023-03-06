import { Link } from "react-router-dom";
import footerLogo from "../assets/images/logo-footer.png";
import "./Footer.scss";
const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__info">
        <div className="footer__content-riht">
          <img src={footerLogo} alt="logo-footer" />
          <p>Информационный портал ОГД города Кемерово</p>
        </div>
        <div className="footer__content-left">
          <div className="footer__tel">+7 (3842) 58-01-56</div>
          <div className="footer__mail">arc@mgis42.ru</div>
        </div>
      </div>
      <div className="footer__link">
        <ul>
          <li>
            <Link to={"/"}>Услуги</Link>
          </li>
          <li>
            <Link to={"/"}>Документы</Link>
          </li>{" "}
          <li>
            <Link to={"/"}>Вопрос-ответ</Link>
          </li>{" "}
          <li>
            <Link to={"/"}>Статистика</Link>
          </li>
          <li>
            <Link to={"/"}>
              Разработка: <strong>Эроншо</strong>{" "}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export { Footer };
