import { useReducer, ReactNode } from "react";
import {
  GithubContextType,
  GithubListUsersType,
  GithubUserType,
  GithubRepoType,
} from "../../types/github";
import { githubReducer } from "./GithubReducer";
import { createCtx } from "../utils";

export const [useGithubCtx, GithubCtxProvider] = createCtx<GithubContextType>();

export const GithubProvider = (props: { children: ReactNode }) => {
  const initialState = {
    users: [] as GithubListUsersType,
    user: {} as GithubUserType,
    repos: {} as GithubRepoType,
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubCtxProvider
      value={{
        ...state,
        dispatch,
      }}
    >
      {props.children}
    </GithubCtxProvider>
  );
};
