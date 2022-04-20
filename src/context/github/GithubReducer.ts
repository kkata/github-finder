import { GithubListUsersType } from "../../types/github";

type StateType = {
  users: GithubListUsersType;
  loading: boolean;
};

type ActionType = {
  type: typeof GET_USERS;
  payload: GithubListUsersType;
};

const GET_USERS = "GET_USERS" as const;

export const githubReducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
