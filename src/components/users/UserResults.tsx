import { useEffect, useContext } from "react";
import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";
import { GithubContext } from "../../context/github/GithubContext";

export const UserResults = () => {
  function useGithubContext() {
    const ctxValue = useContext(GithubContext);
    if (ctxValue === undefined)
      throw new Error("Expected context value to be set");
    return ctxValue;
  }
  const { users, loading, fetchUsers } = useGithubContext();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
};
