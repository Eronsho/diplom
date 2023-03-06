export interface FormSelectAddValues {
  select: {
    id: number;
    value: string;
  }[];
}
export interface SelectValues {
  id: number;
  value: string;
}
export interface SelectState {
  select: SelectValues[] | null;
  loading: boolean;
  error: string | null;
}

export enum SelectActionTypes {
  ADD_NEW_SELECT = "ADD_NEW_SELECT",
  ADD_NEW_SELECT_SUCCESSS = "ADD_NEW_SELECT_SUCCESSS ",
  ADD_NEW_SELECT_ERROR = "ADD_NEW_SELECT_ERROR",
  FETCH_SELECT = "FETCH_SELECT",
  FETCH_SELECT_SUCCESSS = "FETCH_SELECT_SUCCESSS",
  FETCH_SELECT_ERROR = "FETCH_MODULE_ERROR",
}
interface addNewSelectAction {
  type: SelectActionTypes.ADD_NEW_SELECT;
  payload: FormSelectAddValues;
}
interface addSelectSuccessAction {
  type: SelectActionTypes.ADD_NEW_SELECT_SUCCESSS;
  payload: FormSelectAddValues;
}
interface addSelectErrorAction {
  type: SelectActionTypes.ADD_NEW_SELECT_ERROR;
  payload: string;
}
interface fetchSelectAction {
  type: SelectActionTypes.FETCH_SELECT;
}
interface fetchSelectSuccessAction {
  type: SelectActionTypes.FETCH_SELECT_SUCCESSS;
  payload: SelectValues[];
}
//   interface fetchSelectOneSuccessAction {
//     type: SelectActionTypes.;
//     payload: FormSelectAddValues;
//   }
interface fetchSelectErrorAction {
  type: SelectActionTypes.FETCH_SELECT_ERROR;
  payload: string;
}
export type SelectAction =
  | addNewSelectAction
  | addSelectSuccessAction
  | addSelectErrorAction
  | fetchSelectAction
  | fetchSelectSuccessAction
  | fetchSelectErrorAction;
