import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Auth/AuthContext";

const Navbar = () => {

  const {user, signOutUser} = use(AuthContext);

  const handleSignOut =()=>{
     signOutUser()
     .then(()=>{
      alert('user signOut successful')
     })
     .catch(error =>{
      alert(error.message)
     })
  }

  const navLinks = (
    <>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/about"
        >
          About
        </NavLink>
      </li>
      {user && <>
      
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/order"
        >
          Order
        </NavLink>
      </li>
      
      </>}
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/signup"
        >
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => (isActive ? "text-primary" : "")}
          to="/signin"
        >
          Signin
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu font-bold menu-sm dropdown-content bg-base-300 rounded-box z-1 mt-3 w-52 p-2 shadow-2xl"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-primary text-xl">Auth-Integration</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        {user ? <>
        <span>{user.email}</span>
        <a onClick={handleSignOut} className="btn btn-secondary">Sign Out</a>
        </> : <Link to='/signin' className="btn">Login</Link> }
      </div>
    </div>
  );
};

export default Navbar;
