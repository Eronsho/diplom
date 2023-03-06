import {
  ACTIVATE_ROUTE,
  ADD_NEW_CONTRACT,
  ADD_PROJECT,
  ADMIN_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  POPUP_ROUTE,
  REGISTRATION_ROUTE,
} from "./utils/consts";
import { Auth } from "./page/Auth";
import { Main } from "./page/Main";
import { PopUp } from "./page/PopUp";
import { AddProject } from "./components/AddProject";
import { Project } from "./page/AddProject";
import { ONE_PROJECT, PROFILE_ROUTE } from "./utils/consts";
import { OneProject } from "./page/OneProject";
import { Profil } from "./page/Profil";
import { Admin } from "./page/Admin";
export const authRoutes = [
  {
    path: ONE_PROJECT,
    Component: OneProject,
  },
  {
    path: PROFILE_ROUTE,
    Component: Profil,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },

  {
    path: POPUP_ROUTE,
    Component: PopUp,
  },
  {
    path: ADD_NEW_CONTRACT,
    Component: PopUp,
  },
  {
    path: ADD_PROJECT + "/:id",
    Component: Project,
  },
  {
    path: MAIN_ROUTE,
    Component: Main,
  },
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
];
export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth,
  },
  {
    path: ACTIVATE_ROUTE + "/:id",
    Component: Main,
  },
];
