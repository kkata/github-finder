import { useReducer, ReactNode } from "react";
import {
  GithubUserType,
  GithubRepoType,
  GithubListUsersType,
} from "../../types/github";
import { ActionsType, githubReducer, StateType } from "./GithubReducer";
import { createCtx } from "../utils";

type GithubContextType = {
  users: GithubListUsersType;
  user: GithubUserType;
  repos: GithubRepoType;
  loading: boolean;
  searchName: string;
  dispatch: React.Dispatch<ActionsType>;
};

export const [useGithubCtx, GithubCtxProvider] = createCtx<GithubContextType>();

export const GithubProvider = (props: { children: ReactNode }) => {
  const initialState: StateType = {
    users: [],
    user: {} as GithubUserType,
    repos: {} as GithubRepoType,
    loading: false,
    searchName: "",
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
