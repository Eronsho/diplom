import {
  SelectActionTypes,
  FormSelectAddValues,
  SelectValues,
} from "../../models/Select";

export const AddNewSelectRequest = (payload: FormSelectAddValues) => ({
  type: SelectActionTypes.ADD_NEW_SELECT,
  payload,
});
export const AddNewSelectSuccess = (payload: FormSelectAddValues) => ({
  type: SelectActionTypes.ADD_NEW_SELECT_SUCCESSS,
  payload,
});
export const AddNewSelectError = (payload: string) => ({
  type: SelectActionTypes.ADD_NEW_SELECT_ERROR,
  payload,
});
export const FetcSelectAllRequest = () => ({
  type: SelectActionTypes.FETCH_SELECT,
});
export const FetcSelectAllSuccess = (payload: SelectValues[]) => ({
  type: SelectActionTypes.FETCH_SELECT_SUCCESSS,
  payload,
});
export const FetcSelectAllError = (payload: string) => ({
  type: SelectActionTypes.FETCH_SELECT_ERROR,
  payload,
});
