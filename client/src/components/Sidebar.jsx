import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      className="offcanvas offcanvas-start"
      tabIndex="-1"
      id="menu"
      aria-labelledby="menuLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="menuLabel">
          Welcome
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <div className="container-fluid" id="sidebarMenuItems">
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link className="nav-link" data-bs-dismiss="offcanvas" to="/">
              <i className="bi bi-house px-4"></i>
              <span>Home</span>
            </Link>
          </div>
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              className="nav-link"
              data-bs-dismiss="offcanvas"
              aria-current="page"
              to="/profile"
            >
              <i className="bi bi-person px-4"></i>
              <span>Profile</span>
            </Link>
          </div>
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              className="nav-link"
              data-bs-dismiss="offcanvas"
              aria-current="page"
              to="/posts"
            >
              <i className="bi bi-file-post px-4"></i>
              <span>posts</span>
            </Link>
          </div>
          <div className="list-group list-group-flush mx-3 mt-4">
            <Link
              className="nav-link"
              data-bs-dismiss="offcanvas"
              aria-current="page"
              to="/products"
            >
              <i className="bi bi-box px-4"></i>
              <span>products</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
