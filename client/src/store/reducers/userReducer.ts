import { UserAction, UserActionTypes, UserState } from "../../models/User";

const userState: UserState = {
  user: null,
  loading: false,
  error: null,
};
export const userReducer = (
  state = userState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USER_CLIENT:
      return {
        user: state.user,
        error: null,
        loading: true,
      };
    case UserActionTypes.FETCH_USER_CLIEN_SUCCESSS:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.FETCH_USER_MOD:
      return {
        user: state.user,
        error: null,
        loading: true,
      };
    case UserActionTypes.FETCH_USER_MOD_SUCCESSS:
      return {
        user: action.payload,
        error: null,
        loading: false,
      };
    case UserActionTypes.FETCH_USER_ERROR:
      return {
        user: state.user,
        error: action.payload,
        loading: false,
      };
    case UserActionTypes.LOG_OUT_USER_SUCCESSS:
      debugger;
      return {
        user: null,
        error: null,
        loading: false,
      };
    default:
      return state;
  }
};
