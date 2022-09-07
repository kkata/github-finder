import { useState } from "react";
import { useGithubCtx } from "../../context/github/GithubContext";
import { useAlertCtx } from "../../context/alert/AlertContext";
import { fetchUsers } from "../../context/github/GithubActions";
import {
  getUsers,
  removeUsers,
  setLoading,
} from "../../context/github/GithubReducer";

export const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useGithubCtx();
  const { showAlert } = useAlertCtx();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (text === "") {
      showAlert("Please enter something!", "error");
    } else {
      dispatch(setLoading(true));
      const users = await fetchUsers(text);
      dispatch(getUsers(users));

      setText("");
    }
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
                value={text}
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
          <button
            onClick={() => dispatch(removeUsers())}
            className="btn btn-ghost btn-lg"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};
