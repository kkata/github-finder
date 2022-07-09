import { useReducer, ReactNode } from "react";
import {
  GithubContextType,
  GithubListUsersType,
  GithubUserType,
  GithubRepoType,
} from "../../types/github";
import {
  githubReducer,
  setLoading,
  getUsers,
  getUser,
  getRepos,
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
    repos: {} as GithubRepoType,
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

  // Get user repos
  const searchRepos = async (name: Readonly<Params<string>>) => {
    dispatch(setLoading(true));

    const params = new URLSearchParams({
      per_page: "10",
      sort: "updated",
    });

    const res = await fetch(
      `${GITHUB_URL}/users/${name.login}/repos?${params}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    const data = await res.json();
    dispatch(getRepos(data));
  };

  const clearUsers = () => {
    dispatch(removeUsers());
  };

  return (
    <GithubCtxProvider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        searchUser,
        searchRepos,
        clearUsers,
      }}
    >
      {props.children}
    </GithubCtxProvider>
  );
};
