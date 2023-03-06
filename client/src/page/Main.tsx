import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { PopOpContract } from "../components/PopOpContract";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { setActivet } from "../store/action-creators/user";
import { ACTIVATE_ROUTE } from "../utils/consts";
import { Modul } from "../components/Modul";
import { fetchModuledRequest } from "../store/action-creators/module";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const location = useLocation();
  const { moduls } = useTypeSelector((state) => state.moduls);
  const { user } = useTypeSelector((state) => state.user);
  const { projects } = useTypeSelector((state) => state.projects);

  useEffect(() => {
    debugger;
    if (user == null) {
      console.log(user);

      navigate("/login");
    }
    console.log(user);
    dispatch(fetchModuledRequest());
  }, [user]);
  return (
    <>
      <div className="container-main">
        <div className="title">Модули</div>
        {moduls?.length !== 0
          ? moduls?.map((e) => (
              <Modul
                moduls={e}
                projects={projects?.filter(
                  (p) => p[0]?.id_modul === e.modul.id
                )}
                key={e.modul.id}
              />
            ))
          : "Gecnj"}
      </div>
    </>
  );
};
export { Main };
