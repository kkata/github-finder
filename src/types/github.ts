import { Endpoints } from "@octokit/types";
import { Params } from "react-router-dom";

export type GithubListUsersType = Endpoints["GET /users"]["response"]["data"];
export type GithubUserType = Endpoints["GET /user"]["response"]["data"];
export type GithubRepoType =
  Endpoints["GET /repos/{owner}/{repo}"]["response"]["data"];

export type GithubContextType = {
  users: GithubListUsersType;
  user: GithubUserType;
  repos: GithubRepoType;
  loading: boolean;
  dispatch: React.Dispatch<any>;
  clearUsers: () => void;
  searchUser: (name: Readonly<Params<string>>) => void;
  searchRepos: (name: Readonly<Params<string>>) => void;
};
