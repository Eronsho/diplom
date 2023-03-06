import {
  UserActionTypes,
  UserClientAttributes,
  UserModAttributes,
  UserPayload,
  UserPayloadClient,
  UserPayloadMod,
} from "../../models/User";

export const addUseerModRequest = (payload: UserPayloadMod) => ({
  type: UserActionTypes.ADD_USER_MOD,
  payload,
});
export const addUseerClientRequest = (payload: UserPayloadClient) => ({
  type: UserActionTypes.ADD_USER_CLIENT,
  payload,
});
export const addLoginUseerClientRequest = (payload: UserPayload) => ({
  type: UserActionTypes.FETCH_USER_CLIENT,
  payload,
});
export const addLoginUseerModRequest = (payload: UserPayload) => ({
  type: UserActionTypes.FETCH_USER_MOD,
  payload,
});
export const addUseerModSuccess = (payload: UserModAttributes) => ({
  type: UserActionTypes.FETCH_USER_MOD_SUCCESSS,
  payload,
});
export const addUseerClientSuccess = (payload: UserClientAttributes) => ({
  type: UserActionTypes.FETCH_USER_CLIEN_SUCCESSS,
  payload,
});
export const addUseerError = (payload: string) => ({
  type: UserActionTypes.FETCH_USER_ERROR,
  payload,
});
export const logOutUser = () => ({
  type: UserActionTypes.LOG_OUT_USER,
});
export const logOutSuccess = () => ({
  type: UserActionTypes.LOG_OUT_USER_SUCCESSS,
});
export const setActivet = (payload: string | undefined) => ({
  type: UserActionTypes.FETCH_USER_ACTIVET,
  payload,
});
