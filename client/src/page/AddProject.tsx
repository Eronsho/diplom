import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { Modul } from "../components/Modul";
import { AddProject } from "../components/AddProject";
const Project: React.FC = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { modul, loading } = useTypeSelector((state) => state.moduls);
  useEffect(() => {
    console.log(modul);
  }, [modul]);
  return (
    <div className="container-main">
      {modul ? <AddProject moduls={modul} /> : "пусто"}
    </div>
  );
};
export { Project };
