import { GithubListUsersType, GithubListUserType } from "../../types/github";

const GET_USERS = "GET_USERS" as const;
const GET_USER = "GET_USER" as const;
const SET_LOADING = "SET_LOADING" as const;
const REMOVE_USERS = "REMOVE_USERS" as const;

export const getUsers = (users: GithubListUsersType) => ({
  type: GET_USERS,
  payload: users,
});

export const getUser = (user: GithubListUsersType["0"]) => ({
  type: GET_USER,
  payload: user,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

export const removeUsers = () => ({
  type: REMOVE_USERS,
});

type ActionsType = ReturnType<
  typeof getUsers | typeof getUser | typeof setLoading | typeof removeUsers
>;

type StateType = {
  users: GithubListUsersType;
  user: GithubListUserType;
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
    case GET_USER:
      return {
        ...state,
        user: action.payload,
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
