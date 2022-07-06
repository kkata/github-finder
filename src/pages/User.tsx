import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGithubCtx } from "../context/github/GithubContext";

export const User = () => {
  const { searchUser, user } = useGithubCtx();

  const { login } = useParams<{ login?: string }>();

  useEffect(() => {
    if (login) {
      searchUser(login);
    }
  }, []);
  return <div>{user.login}</div>;
};
