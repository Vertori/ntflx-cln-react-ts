import { Link } from "react-router-dom";
import netflixLogo from "../assets/netflix-logo.png";
import { UserAuth } from "../context/AuthContext";

const Navbar = (): JSX.Element => {
  const { user, logOut } = UserAuth();

  return (
    <div className="w-full flex items-center justify-between py-6 px-12 z-[100] fixed">
      <Link to="/">
        <img className="w-32" src={netflixLogo} />
      </Link>

      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white pr-4 cursor-pointer">Account</button>
          </Link>
          <button className="bg-red-600 px-6 py-2 rounded-[8px] cursor-pointer text-white">
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className="text-white pr-4 cursor-pointer">Sign In</button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded-[8px] cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
