import { createContext, useReducer, ReactNode } from "react";
import { GithubContextType } from "../../types/github";
import { githubReducer, setLoading, getUsers } from "./GithubReducer";

export const GithubContext = createContext<GithubContextType | undefined>(
  undefined
);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = (props: { children: ReactNode }) => {
  const initialState = {
    users: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const fetchUsers = async () => {
    dispatch(setLoading(true));

    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    dispatch(getUsers(data));
  };

  return (
    <GithubContext.Provider
      value={{ users: state.users, loading: state.loading, fetchUsers }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};
