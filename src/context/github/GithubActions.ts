import axios from "axios";
import { Params } from "react-router-dom";
import { GithubRepoType, GithubUserType } from "../../types/github";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

const github = axios.create({
  baseURL: GITHUB_URL,
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
});

export const fetchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await github.get(`/search/users?${params}`);
  return response.data.items;
};

// Get user and repos from github
export const fetchUserAndRepos = async (
  username: Readonly<Params<string>>
): Promise<{
  user: GithubUserType;
  repos: GithubRepoType;
}> => {
  const [user, repos] = await Promise.all([
    github.get(`/users/${username.login}`),
    github.get(`/users/${username.login}/repos`),
  ]);

  return {
    user: user.data,
    repos: repos.data,
  };
};
