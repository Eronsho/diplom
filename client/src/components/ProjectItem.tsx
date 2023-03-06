import {
  Control,
  FieldArrayPath,
  FieldArrayPathValue,
  FieldName,
  FieldValues,
  RegisterOptions,
  UseFormRegister,
  UseFormWatch,
  useController,
  useWatch,
} from "react-hook-form";
import { DescriptionModulFront } from "../models/Modul";
import { ProjectStateAttributes } from "../models/Project";
import { fetchOneProjectRequest } from "../store/action-creators/project";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ONE_PROJECT } from "../utils/consts";
import { fetchOneModuledRequest } from "../store/action-creators/module";
type UseControllerProp = {
  projects: ProjectStateAttributes[];
  keyName: DescriptionModulFront[];
};

export const ProjectItem: React.FC<UseControllerProp> = ({
  projects,
  keyName,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let click = (idModul: string, idProject: string) => {
    dispatch(fetchOneProjectRequest({ idModul, idProject }));
    dispatch(fetchOneModuledRequest(idModul));
    navigate(ONE_PROJECT);
  };
  return (
    <>
      {projects.map((e) => (
        <div
          key={e.id}
          onClick={() => click(e.id_modul, e.id)}
          className="modul-content__content"
        >
          {keyName.map((i) =>
            i.input_type !== "fale" ? (
              <div className="modul-content__text">{e[i.name_bd]}</div>
            ) : (
              ""
            )
          )}
        </div>
      ))}
    </>
  );
};
