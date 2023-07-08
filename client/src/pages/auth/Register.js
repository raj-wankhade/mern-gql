import React, { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    console.log("submit success");
  };

  return (
    <div className="container col-md-6">
      <h3>Welcome</h3>
      <p>Please register to continue</p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3 w-100 m-auto">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={loading ? true : false}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
