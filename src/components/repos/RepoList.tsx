import { GithubRepoType } from "../../types/github";
import { RepoItem } from "./RepoItem";

type Props = {
  repos: GithubRepoType;
};

export const RepoList = ({ repos }: Props) => {
  if (Array.isArray(repos) && repos.length > 0) {
    return (
      <>
        <div className="rounded-lg shadow-lg card bg-base-100">
          <div className="card-body">
            <h2 className="text-3xl my-4 font-bold card-title">
              Latest Repositories
            </h2>
          </div>
        </div>
        {repos.map((repo) => {
          return <RepoItem key={repo.id} repo={repo} />;
        })}
      </>
    );
  } else {
    return <div>No repos</div>;
  }
};
