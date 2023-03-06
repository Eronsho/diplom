import {
  SelectAction,
  SelectActionTypes,
  SelectState,
} from "../../models/Select";

const modalState: SelectState = {
  select: null,
  loading: false,
  error: null,
};
export const selectReducer = (
  state = modalState,
  action: SelectAction
): SelectState => {
  switch (action.type) {
    case SelectActionTypes.FETCH_SELECT:
      return {
        ...state,
        select: state.select,
        error: null,
        loading: true,
      };

    case SelectActionTypes.FETCH_SELECT_SUCCESSS:
      return {
        ...state,
        select: [...action.payload],
        error: null,
        loading: false,
      };
    case SelectActionTypes.ADD_NEW_SELECT_ERROR:
      return {
        ...state,
        select: state.select,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
