import { GithubListUsersType } from "../../types/github";
import { Link } from "react-router-dom";

type Props = {
  user: GithubListUsersType[0];
};

export const UserItem = ({ user }: Props) => {
  return (
    <div className="card shadow-md compact side bg-base-100 hover:bg-base-200">
      <div className="flex-row items-center space-x-4 card-body">
        <div>
          <div className="avatar">
            <div className="rounded-full shadow w-14 h-14">
              <img
                src={user.avatar_url}
                width="56"
                height="56"
                loading="lazy"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <h2 className="card-title">{user.login}</h2>
          <Link
            className="text-base-content text-opacity-40 hover:underline"
            to={`/user/${user.login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
};
