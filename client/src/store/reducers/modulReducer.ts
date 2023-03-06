import {
  ModulState,
  ModuleAction,
  ModuleActionTypes,
} from "../../models/Modul";

const modalState: ModulState = {
  moduls: null,
  modul: null,
  loading: false,
  error: null,
};
export const modulReducer = (
  state = modalState,
  action: ModuleAction
): ModulState => {
  switch (action.type) {
    case ModuleActionTypes.FETCH_MODULE:
      return {
        ...state,
        moduls: state.moduls,
        modul: state.modul,
        error: null,
        loading: true,
      };

    case ModuleActionTypes.FETCH_MODULE_SUCCESSS:
      return {
        ...state,
        moduls: [...action.payload],
        modul: null,
        error: null,
        loading: false,
      };

    case ModuleActionTypes.FETCH_MODULE_ERROR:
      return {
        ...state,
        moduls: state.moduls,
        modul: null,
        error: action.payload,
        loading: true,
      };
    case ModuleActionTypes.FETCH_ONE_MODULE:
      return {
        ...state,
        moduls: state.moduls,
        modul: state.modul,
        error: null,
        loading: true,
      };
    case ModuleActionTypes.FETCH_ONE_MODULE_SUCCESSS:
      return {
        ...state,
        moduls: state.moduls,
        modul: action.payload,
        error: null,
        loading: false,
      };
    case ModuleActionTypes.FETCH_ONE_MODULE_ERROR:
      return {
        ...state,
        moduls: state.moduls,
        modul: state.modul,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
