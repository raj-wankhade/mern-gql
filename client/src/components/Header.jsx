import { signOut } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import { auth } from "../firebase";

export default function Header() {
  const { state, dispatch } = useContext(AuthContext);
  const { user } = state;

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth)
      .then(() => {
        localStorage.removeItem("accessToken");

        dispatch({
          type: "LOGGED_IN_USER",
          user: null,
        });
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="container-fluid">
      <ul className="navbar-nav d-flex">
        <li className="nav-item">
          <Link className="navbar-brand text-white" aria-current="page" to="/">
            <img
              src="https://getbootstrap.com/docs/5.1/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            MERN-GQL
          </Link>
        </li>
        {user && (
          <div className="me-auto">
            <a
              className="text-white me-auto"
              data-bs-toggle="offcanvas"
              href="#menu"
              role="button"
              aria-controls="menu"
            >
              <i className="bi bi-list px-4"></i>
            </a>
          </div>
        )}
        <li className="nav-item">
          {!user && (
            <Link className="nav-link" aria-current="page" to="/login">
              Login
            </Link>
          )}
        </li>
        <li className="nav-item">
          {!user && (
            <Link className="nav-link " aria-current="page" to="/register">
              Register
            </Link>
          )}
        </li>
      </ul>
      <form className="d-flex ">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="ms-auto">
        {user && (
          <Link
            className="nav-link text-white"
            aria-current="page"
            to="/"
            onClick={logout}
          >
            <span
              className="d-inline-block"
              tabIndex="0"
              data-bs-trigger="hover focus"
              data-bs-content="Log out"
            >
              <i className="bi bi-power px-4"></i>
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
