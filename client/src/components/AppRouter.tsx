import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes, publicRoutes } from "../routes";
import { useTypeSelector } from "../hooks/useTypeSelector";
import { LOGIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const { user } = useTypeSelector((state) => state.user);
  return (
    <Routes>
      {user != null
        ? authRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))
        : publicRoutes.map(({ path, Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
    </Routes>
  );
};
export default AppRouter;
