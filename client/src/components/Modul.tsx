import { useEffect, useState } from "react";
import "./Modul.scss";
import { useDispatch } from "react-redux";
import {
  fetchModuledRequest,
  fetchOneModuledRequest,
} from "../store/action-creators/module";
import { ModuleAttributes, modulStateType } from "../models/Modul";
import { useLocation, useNavigate } from "react-router-dom";
import { ADD_PROJECT, PROFILE_ROUTE } from "../utils/consts";
import { ProjectItem } from "./ProjectItem";
import { ProjectStateAttributes, projectStateType } from "../models/Project";
type ModulListProps = {
  moduls: modulStateType;
  projects: ProjectStateAttributes[][] | null | undefined;
};
const Modul: React.FC<ModulListProps> = ({ moduls, projects }) => {
  const [opened, setOpened] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const isProfil = location.pathname === PROFILE_ROUTE;
  const addOneDevice = (id: string) => {
    dispatch(fetchOneModuledRequest(id));
    navigate(ADD_PROJECT + "/" + id);
  };

  return (
    <div className={opened === true ? "modul" : "modul-hiden "}>
      <div className="modul__header modul-header">
        <div className="modul-header__content">
          <p className="modul-header__text">{moduls.modul.name_front}</p>
          <button
            className="add-btn"
            onClick={() => addOneDevice(moduls.modul.id)}
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 10.5V19.5M19.5 15H10.5M28.5 15C28.5 22.4558 22.4558 28.5 15 28.5C7.54416 28.5 1.5 22.4558 1.5 15C1.5 7.54416 7.54416 1.5 15 1.5C22.4558 1.5 28.5 7.54416 28.5 15Z"
                stroke="#F2C94C"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="reveal" onClick={() => setOpened(!opened)}>
          <svg
            width="30"
            height="26"
            viewBox="0 0 30 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={opened !== false ? { transform: " rotate(180deg)" } : {}}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7.84525 9.37217C8.29312 8.99894 9.0053 9.01104 9.43594 9.3992L15 14.5183L20.5641 9.3992C20.9947 9.01104 21.7069 8.99894 22.1548 9.37216C22.6026 9.74539 22.6166 10.3626 22.1859 10.7508L15.8109 16.6008C15.5988 16.7919 15.306 16.9 15 16.9C14.694 16.9 14.4012 16.7919 14.1891 16.6008L7.81406 10.7508C7.38342 10.3626 7.39739 9.74539 7.84525 9.37217Z"
              fill="#F2F2F2"
            />
          </svg>
        </div>
      </div>
      <div className="modul__content modul-content">
        <div className="modul-content__header">
          {moduls.description.frontSettings.map((e) =>
            e.input_type !== "fale" ? (
              <div key={e.id} className="modul-content__title">
                <p>{e.name_front}</p>
              </div>
            ) : (
              ""
            )
          )}
        </div>
        {projects?.map((e) => (
          <ProjectItem
            projects={e}
            keyName={moduls.description.frontSettings}
          />
        ))}
      </div>
      <div className="modul__numbering numbering">
        <button
          type="submit"
          className="numbering__item numbering__item--active"
        >
          <p>1</p>
        </button>
        <button className="numbering__item">
          <p>2</p>
        </button>
        <button className="numbering__item">
          <p>3</p>
        </button>
        <button className="numbering__item">
          <p>4</p>
        </button>
        <button className="numbering__item">
          <p>5</p>
        </button>
        <button className="numbering__item decor">
          <p>...</p>
        </button>
      </div>
    </div>
  );
};
export { Modul };
