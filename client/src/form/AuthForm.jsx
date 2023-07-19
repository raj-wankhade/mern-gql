import React from "react";
import { Link } from "react-router-dom";

const AuthForm = ({
  email = "",
  password = "",
  loading,
  setEmail = (f) => f,
  setPassword,
  handleSubmit,
  showPasswordInput = false,
  hideEmailInput = false,
  isLogin = false,
}) => (
  <form onSubmit={handleSubmit} className="mt-5">
    {isLogin && (
      <div className="form-group row mb-4">
        <div className="col">
          <div className="">
            <input type="text" id="" className="form-control" />
            <label className="form-label" htmlFor="">
              First name
            </label>
          </div>
        </div>
        <div className="col">
          <div className="">
            <input type="text" id="" className="form-control" />
            <label className="form-label" htmlFor="">
              Last name
            </label>
          </div>
        </div>
      </div>
    )}

    {!hideEmailInput && (
      <div className="form-group mb-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Enter email"
          disabled={loading}
        />
        <label className="form-label">Email Address</label>
      </div>
    )}

    {showPasswordInput && (
      <div className="form-group mb-3">
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Enter password"
          disabled={loading}
        />
        <label className="form-label">Password</label>
      </div>
    )}

    <button className="btn  btn-raised btn-primary mb-3" disabled={loading}>
      Submit
    </button>
    <Link className="text-danger float-end" to="/password/forgot">
      Forgot Password
    </Link>
  </form>
);

export default AuthForm;
