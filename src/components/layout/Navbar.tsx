import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content min-h-fit py-4">
      <div className="container mx-auto flex-wrap">
        <div className="flex-none px-2 mx-2">
          <FaGithub className="inline pr-2 text-3xl" aria-hidden="true" />
          <Link to="/" className=" text-lg font-bold">
            GitHub Finder
          </Link>
        </div>

        <div className="flex-1 px-2 mx-2">
          <div className="flex justify-end">
            <Link to="/" className="btn btn-ghost btn-sm rounded-btn">
              Home
            </Link>
            <Link to="/about" className="btn btn-ghost btn-sm rounded-btn">
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
