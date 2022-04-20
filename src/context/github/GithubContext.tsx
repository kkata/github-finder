import { createContext, useState, ReactNode } from "react";
import { GithubListUsersType, GithubContextType } from "../../types/github";

// export const GithubContext = createContext({} as GithubContextType);
export const GithubContext = createContext<GithubContextType | undefined>(
  undefined
);

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = (props: { children: ReactNode }) => {
  const [users, setUsers] = useState<GithubListUsersType>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchUsers = async () => {
    const res = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    setUsers(data);
    setLoading(false);
  };

  return (
    <GithubContext.Provider value={{ users, loading, fetchUsers }}>
      {props.children}
    </GithubContext.Provider>
  );
};
