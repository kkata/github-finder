import { GithubListUsersType } from "../../types/github";

const GET_USERS = "GET_USERS" as const;
const SET_LOADING = "SET_LOADING" as const;

export const getUsers = (users: GithubListUsersType) => ({
  type: GET_USERS,
  payload: users,
});

export const setLoading = (loading: boolean) => ({
  type: SET_LOADING,
  payload: loading,
});

type ActionsType = ReturnType<typeof getUsers | typeof setLoading>;

type StateType = {
  users: GithubListUsersType;
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
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    default:
      return state;
  }
};
