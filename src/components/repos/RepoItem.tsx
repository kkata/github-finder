import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

import { GithubRepoType } from "../../types/github";

type Props = {
  repo: GithubRepoType;
};

export const RepoItem = ({ repo }: Props) => {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo;

  return (
    <div className="mb-2 rounded-md card bg-base-200 hover:bg-base-300">
      <div className="card-body">
        <h3 className="mb-2 text-xl font-semibold">
          <a
            href={html_url}
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            <FaLink className="inline mr-1" aria-hidden="true" /> {name}
          </a>
        </h3>
        <p className="mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          <div className="badge badge-info badge-lg">
            <FaEye className="mr-2" role="img" title="Number of watchers" />
            {watchers_count}
          </div>
          <div className="badge badge-success badge-lg">
            <FaStar className="mr-2" role="img" title="Number of stars" />
            {stargazers_count}
          </div>
          <div className="badge badge-error badge-lg">
            <FaInfo className="mr-2" role="img" title="Number of open issues" />
            {open_issues}
          </div>
          <div className="badge badge-warning badge-lg">
            <FaUtensils
              className="mr-2"
              role="img"
              title="Number of open forks"
            />
            {forks}
          </div>
        </div>
      </div>
    </div>
  );
};
