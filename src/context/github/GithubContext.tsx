import { useReducer, ReactNode } from "react";
import {
  GithubContextType,
  GithubListUsersType,
  GithubUserType,
} from "../../types/github";
import {
  githubReducer,
  setLoading,
  getUsers,
  getUser,
  removeUsers,
} from "./GithubReducer";
import { createCtx } from "../utils";
import { Params } from "react-router-dom";

export const [useGithubCtx, GithubCtxProvider] = createCtx<GithubContextType>();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = (props: { children: ReactNode }) => {
  const initialState = {
    users: [] as GithubListUsersType,
    user: {} as GithubUserType,
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text: string) => {
    dispatch(setLoading(true));

    const params = new URLSearchParams({
      q: text,
    });

    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();
    dispatch(getUsers(items));
  };

  // Get single user
  const searchUser = async (name: Readonly<Params<string>>) => {
    dispatch(setLoading(true));

    const res = await fetch(`${GITHUB_URL}/users/${name.login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 404) {
      window.location.href = "/notfound";
    } else {
      const data = await res.json();
      dispatch(getUser(data));
    }
  };

  const clearUsers = () => {
    dispatch(removeUsers());
  };

  return (
    <GithubCtxProvider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUsers,
        searchUser,
        clearUsers,
      }}
    >
      {props.children}
    </GithubCtxProvider>
  );
};
