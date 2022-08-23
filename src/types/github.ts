import { Endpoints } from "@octokit/types";
import { ActionsType } from "../context/github/GithubReducer";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubUserType = Endpoints["GET /user"]["response"]["data"];
export type GithubRepoType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type GithubContextType = {
  users: GithubListUsersType;
  user: GithubUserType;
  repos: GithubRepoType;
  loading: boolean;
  dispatch: React.Dispatch<ActionsType>;
};
