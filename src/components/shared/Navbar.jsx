import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const [user] = useAuthState(auth);
  
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

    return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
        
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold">Recipe Share</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <li>
          <Link to={'/'}>Home</Link>
        </li>
        <li>
          <Link to={'/about'}>About</Link>
        </li>
        <li>
          <Link to={'/contact'}>Contact</Link>
        </li>
    </ul>
  </div>


  {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Register
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <div>
            <button className="btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div>
            <Link to={"/dashboard"} className="btn">
              Dashboard
            </Link>
          </div>

          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-8">
              <span>AS</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;