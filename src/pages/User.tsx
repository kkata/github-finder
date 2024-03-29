import { FaCodepen, FaStore, FaUserFriends, FaUsers } from "react-icons/fa";
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Spinner } from "../components/layout/Spinner";
import { RepoList } from "../components/repos/RepoList";
import { useGithubCtx } from "../context/github/GithubContext";
import { setLoading, getUserAndRepos } from "../context/github/GithubReducer";
import { fetchUserAndRepos } from "../context/github/GithubActions";

export const User = () => {
  const { user, repos, loading, dispatch } = useGithubCtx();

  const loginName = useParams();

  useEffect(() => {
    dispatch(setLoading(true));
    const getUserData = async () => {
      const userData = await fetchUserAndRepos(loginName);
      dispatch(getUserAndRepos(userData.user, userData.repos));
    };

    getUserData();
  }, [dispatch, loginName]);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link to="/" className="btn btn-ghost">
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <figure className="rounded-lg shadow-xl card image-full">
              <img
                src={avatar_url}
                width="460"
                height="460"
                loading="lazy"
                alt={`avatar of ${login}`}
                className="w-full"
              />
              <figcaption className="card-body justify-end">
                <div className="card-title">{name}</div>
                <div className="flex-grow-0">{login}</div>
              </figcaption>
            </figure>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline"
                >
                  Visit GitHub Profile
                </a>
              </div>
            </div>

            <div className="rounded-lg shadow-md bg-base-100 stats stats-vertical lg:stats-horizontal w-full">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="text-lg break-all">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="text-lg">
                    <a
                      href={websiteUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline break-all"
                    >
                      {websiteUrl}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">Twitter</div>
                  <div className="text-lg">
                    <a
                      href={`https://twitter.com/${twitter_username}`}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:underline break-all"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="w-full py-5 mb-6 rounded-lg shadow-md bg-base-100 stats">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" aria-hidden="true" />
              </div>
              <div className="stat-title pr-5">Followers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends
                  className="text-3xl md:text-5xl"
                  aria-hidden="true"
                />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen
                  className="text-3xl md:text-5xl"
                  aria-hidden="true"
                />
              </div>
              <div className="stat-title pr-5">Public Repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaStore className="text-3xl md:text-5xl" aria-hidden="true" />
              </div>
              <div className="stat-title pr-5">Public Gists</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_gists}
              </div>
            </div>
          </div>
        </div>

        <RepoList repos={repos} />
      </div>
    </>
  );
};
