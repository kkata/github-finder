import { Spinner } from "../layout/Spinner";
import { UserItem } from "./UserItem";
import { useGithubCtx } from "../../context/github/GithubContext";

export const UserResults = () => {
  const { users, loading } = useGithubCtx();

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
