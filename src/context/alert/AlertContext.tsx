import { useReducer, ReactNode } from "react";
import { alertReducer, setAlert, removeAlert } from "./AlertReducer";
import { createCtx } from "../utils";

import { AlertType } from "../../types/alert";

type AlertContextType = {
  alert: AlertType;
  showAlert: (message: string, status: string) => void;
  removeAlert: () => void;
};

export const [useAlertCtx, AlertCtxProvider] = createCtx<AlertContextType>();

export const AlertProvider = (props: { children: ReactNode }) => {
  const initialState = undefined;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  const showAlert = (message: string, status: string) => {
    dispatch(setAlert({ message, status }));

    setTimeout(() => dispatch(removeAlert()), 3000);
  };

  return (
    <AlertCtxProvider
      value={{
        alert: state,
        showAlert,
        removeAlert,
      }}
    >
      {props.children}
    </AlertCtxProvider>
  );
};
