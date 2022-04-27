import { useReducer, ReactNode } from "react";
import { GithubContextType } from "../../types/github";
import { githubReducer, setLoading, getUsers } from "./GithubReducer";
import { createCtx } from "../utils";

export const [useGithubCtx, GithubCtxProvider] = createCtx<GithubContextType>();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = (props: { children: ReactNode }) => {
  const initialState = {
    users: [],
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

  return (
    <GithubCtxProvider
      value={{ users: state.users, loading: state.loading, searchUsers }}
    >
      {props.children}
    </GithubCtxProvider>
  );
};
