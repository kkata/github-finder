import { Endpoints } from "@octokit/types";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubUserType = Endpoints["GET /user"]["response"]["data"];

export type GithubContextType = {
  users: GithubListUsersType;
  user: GithubUserType;
  loading: boolean;
  searchUsers: (text: string) => void;
  clearUsers: () => void;
  searchUser: (login: string) => void;
};
