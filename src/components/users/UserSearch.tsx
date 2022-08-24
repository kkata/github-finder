import { useGithubCtx } from "../../context/github/GithubContext";
import { useAlertCtx } from "../../context/alert/AlertContext";
import { fetchUsers } from "../../context/github/GithubActions";
import {
  getUsers,
  removeUsers,
  setLoading,
  setSearchName,
  removeSearchName,
} from "../../context/github/GithubReducer";

export const UserSearch = () => {
  const { users, dispatch, searchName } = useGithubCtx();
  const { showAlert } = useAlertCtx();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchName(e.target.value));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchName === "") {
      showAlert("Please enter something!", "error");
    } else {
      dispatch(setLoading(true));
      const users = await fetchUsers(searchName);
      dispatch(getUsers(users));
      dispatch(setSearchName(searchName));
    }
  };

  const handleClear = () => {
    dispatch(removeUsers());
    dispatch(removeSearchName());
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                value={searchName}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-32 btn btn-lg"
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button onClick={handleClear} className="btn btn-ghost btn-lg">
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
