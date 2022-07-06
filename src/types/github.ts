import { Endpoints } from "@octokit/types";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubListUserType = Endpoints["GET /users"]["response"]["data"][0];

export type GithubContextType = {
  users: GithubListUsersType;
  user: GithubListUserType;
  loading: boolean;
  searchUsers: (text: string) => void;
  clearUsers: () => void;
  searchUser: (login: string) => void;
};
