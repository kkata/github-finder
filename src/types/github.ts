import { Endpoints } from "@octokit/types";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubUserType = Endpoints["GET /user"]["response"]["data"];
export type GithubRepoType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];
