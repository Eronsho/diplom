import {
  ProjectAction,
  ProjectActionTypes,
  ProjectState,
} from "../../models/Project";
import { SelectActionTypes } from "../../models/Select";

const projectState: ProjectState = {
  projects: null,
  project: {
    documents: [],
    project: { id: "", id_modul: ";s", user_id: "lsl" },
  },
  loading: false,
  error: null,
};
export const projectReducer = (
  state = projectState,
  action: ProjectAction
): ProjectState => {
  switch (action.type) {
    case ProjectActionTypes.FETCH_PROJECTS:
      return {
        ...state,
        projects: state.projects,
        project: state.project,
        error: null,
        loading: true,
      };

    case ProjectActionTypes.FETCH_PROJECTS_SUCCESSS:
      return {
        ...state,
        projects: [...action.payload],
        project: state.project,
        error: null,
        loading: false,
      };
    case ProjectActionTypes.FETCH_PROJECTS_ERROR:
      return {
        ...state,
        projects: state.projects,
        project: state.project,
        error: action.payload,
        loading: false,
      };
    case ProjectActionTypes.FETCH_ONE_PROJECT:
      return {
        ...state,
        projects: state.projects,
        project: state.project,
        error: null,
        loading: true,
      };

    case ProjectActionTypes.FETCH_ONE_PROJECT_SUCCESSS:
      debugger;
      return {
        ...state,
        projects: state.projects,
        project: action.payload,
        error: null,
        loading: false,
      };
    case ProjectActionTypes.FETCH_ONE_PROJECT_ERROR:
      return {
        ...state,
        projects: state.projects,
        project: state.project,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
