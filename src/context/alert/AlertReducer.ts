import { AlertType } from "../../types/alert";

const SET_ALERT = "SET_ALERT" as const;
const REMOVE_ALERT = "REMOVE_ALERT" as const;

export const setAlert = (alert: AlertType) => ({
  type: SET_ALERT,
  payload: alert,
});

export const removeAlert = () => ({
  type: REMOVE_ALERT,
});

type ActionsType = ReturnType<typeof setAlert | typeof removeAlert>;

type StateType = AlertType;

export const alertReducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case SET_ALERT:
      return action.payload;
    case REMOVE_ALERT:
      return undefined;
    default:
      return state;
  }
};
