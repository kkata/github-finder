import {
  GithubListUsersType,
  GithubUserType,
  GithubRepoType,
} from "../../types/github";

const GET_USERS = "GET_USERS" as const;
const GET_USER_AND_REPOS = "GET_USER_AND_REPOS" as const;
const SET_LOADING = "SET_LOADING" as const;
const REMOVE_USERS = "REMOVE_USERS" as const;

export const getUsers = (users: GithubListUsersType) => ({
  type: GET_USERS,
  payload: users,
});

export const getUserAndRepos = (
  user: GithubUserType,
  repos: GithubRepoType
) => ({
  type: GET_USER_AND_REPOS,
  payload: { user, repos },
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const removeUsers = () => ({
  type: REMOVE_USERS,
});

export type ActionsType = ReturnType<
  | typeof getUsers
  | typeof getUserAndRepos
  | typeof setLoading
  | typeof removeUsers
>;

type StateType = {
  users: GithubListUsersType;
  user: GithubUserType;
  repos: GithubRepoType;
  loading: boolean;
};

export const githubReducer = (state: StateType, action: ActionsType) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USER_AND_REPOS:
      return {
        ...state,
        user: action.payload.user,
        repos: action.payload.repos,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case REMOVE_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};
