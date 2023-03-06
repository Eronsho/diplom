import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Modul } from "../components/Modul";
import { AddProject } from "../components/AddProject";
const OneProject: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { project, loading } = useTypeSelector((state) => state.projects);
  const { modul } = useTypeSelector((state) => state.moduls);

  return (
    <>
      {loading === true ? (
        ""
      ) : (
        <div className="container-main">
          <div className="title">Проект модуля {modul?.modul.name_front}</div>
          <div className="project">
            <div className="project__container">
              <div className="project__left">
                <div className="sub-title">Информация</div>
                {modul?.description.frontSettings.map((e) =>
                  e.input_type !== "fale" ? (
                    <div key={e.id} className="text-project">
                      {e.name_front}:
                      <strong>{project.project[e.name_bd]}</strong>
                    </div>
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="project__riht">
                <div className="sub-title">Документы</div>
                <div className="doc-group">
                  {project?.project !== undefined
                    ? project.documents.map((e) =>
                        e.allow_null === true ? (
                          <Link
                            className="lebel-file"
                            target="_blank"
                            to={e.url}
                          >
                            {" "}
                            {e.name}
                          </Link>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
                <div className="small-title">Необязательные документы</div>
                <div className="doc-container">
                  {project?.project !== undefined
                    ? project.documents.map((e) =>
                        e.allow_null === false ? (
                          <div className="lebel-file">{e.name}</div>
                        ) : (
                          ""
                        )
                      )
                    : ""}
                </div>
              </div>
            </div>
          </div>
          <input className="btn" type="submit" />
        </div>
      )}{" "}
    </>
  );
};
export { OneProject };
