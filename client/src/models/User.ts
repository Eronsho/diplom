export interface UserState {
  user: UserModAttributes | null | UserClientAttributes;
  loading: boolean;
  error: null | string;
}
export interface UserModAttributes {
  id: string;
  email: string;
  full_name: string;
  post: string;
  role: string;
  isActivated: boolean;
  activationLink: string;
}
export interface UserClientAttributes {
  id: string;
  email: string;
  full_name: string;
  contract: number;
  role: string;
  isActivated: boolean;
  activationLink: string;
}
export interface UserPayloadMod {
  email: string;
  password: string;
  full_name: string;
  post: string;
  role: string;
}
export interface UserPayloadClient {
  email: string;
  password: string;
  full_name: string;
  contract: number;
}
export interface UserPayload {
  email: string;
  password: string;
}
export enum UserActionTypes {
  ADD_USER_MOD = "ADD_USER_MOD",
  ADD_USER_CLIENT = "ADD_USER_CLIENT",
  LOG_OUT_USER = "LOG_OUT_USER",
  LOG_OUT_USER_SUCCESSS = "LOG_OUT_USER_SUCCESSS",
  FETCH_USER_MOD = "FETCH_USER_MOD",
  FETCH_USER_MOD_SUCCESSS = "FETCH_USER_MOD_SUCCESSS",
  FETCH_USER_CLIENT = "FETCH_USER_CLIEN",
  FETCH_USER_CLIEN_SUCCESSS = "FETCH_USER_CLIEN_SUCCESSS",
  FETCH_USER_ERROR = "FETCH_USER_ERROR",
  FETCH_USER_ACTIVET = "FETCH_USER_ACTIVET",
}
interface addUserModAction {
  type: UserActionTypes.ADD_USER_MOD;
  payload: UserPayloadMod;
}
interface addUseClientrAction {
  type: UserActionTypes.ADD_USER_CLIENT;
  payload: UserPayloadClient;
}
interface logOutUserAction {
  type: UserActionTypes.LOG_OUT_USER;
}
interface logOutUserSuccessAction {
  type: UserActionTypes.LOG_OUT_USER_SUCCESSS;
}
interface FetchUserModActhion {
  type: UserActionTypes.FETCH_USER_MOD;
  payload: UserPayload;
}
interface fetchUserModSuccessAction {
  type: UserActionTypes.FETCH_USER_MOD_SUCCESSS;
  payload: UserModAttributes;
}
interface FetchUserClientActhion {
  type: UserActionTypes.FETCH_USER_CLIENT;
  payload: UserPayload;
}
interface fetchUserClientSuccessAction {
  type: UserActionTypes.FETCH_USER_CLIEN_SUCCESSS;
  payload: UserClientAttributes;
}
interface FetchUserErrorAction {
  type: UserActionTypes.FETCH_USER_ERROR;
  payload: string;
}
interface FetchUserActivetAction {
  type: UserActionTypes.FETCH_USER_ACTIVET;
  payload: string;
}

export type UserAction =
  | addUserModAction
  | addUseClientrAction
  | logOutUserAction
  | logOutUserSuccessAction
  | FetchUserModActhion
  | fetchUserModSuccessAction
  | FetchUserClientActhion
  | fetchUserClientSuccessAction
  | FetchUserErrorAction
  | FetchUserActivetAction;
