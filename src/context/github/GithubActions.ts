import { Params } from "react-router-dom";

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const searchUsers = async (text: string) => {
  const params = new URLSearchParams({
    q: text,
  });

  const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const { items } = await res.json();

  return items;
};

// Get single user
export const searchUser = async (name: Readonly<Params<string>>) => {
  const res = await fetch(`${GITHUB_URL}/users/${name.login}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  if (res.status === 404) {
    window.location.href = "/notfound";
  } else {
    const data = await res.json();
    return data;
  }
};

// Get user repos
export const searchRepos = async (name: Readonly<Params<string>>) => {
  const params = new URLSearchParams({
    per_page: "10",
    sort: "updated",
  });

  const res = await fetch(`${GITHUB_URL}/users/${name.login}/repos?${params}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });

  const data = await res.json();
  return data;
};
