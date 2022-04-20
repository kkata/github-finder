import { Endpoints } from "@octokit/types";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubContextType = {
  users: GithubListUsersType;
  loading: boolean;
  fetchUsers: () => void;
};
