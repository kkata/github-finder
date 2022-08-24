import {
  GithubListUsersType,
  GithubUserType,
  GithubRepoType,
} from "../../types/github";

const GET_USERS = "GET_USERS" as const;
const GET_USER_AND_REPOS = "GET_USER_AND_REPOS" as const;
const SET_LOADING = "SET_LOADING" as const;
const REMOVE_USERS = "REMOVE_USERS" as const;
const SET_SEARCH_NAME = "SET_SEARCH_NAME" as const;
const REMOVE_SEARCH_NAME = "REMOVE_SEARCH_NAME" as const;

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

export const setSearchName = (searchName: string) => ({
  type: SET_SEARCH_NAME,
  payload: searchName,
});

export const removeSearchName = () => ({
  type: REMOVE_SEARCH_NAME,
});

export type ActionsType = ReturnType<
  | typeof getUsers
  | typeof getUserAndRepos
  | typeof setLoading
  | typeof removeUsers
  | typeof setSearchName
  | typeof removeSearchName
>;

export type StateType = {
  users: GithubListUsersType;
  user: GithubUserType;
  repos: GithubRepoType;
  loading: boolean;
  searchName: string;
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
    case SET_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    case REMOVE_SEARCH_NAME:
      return {
        ...state,
        searchName: "",
      };

    default:
      return state;
  }
};
