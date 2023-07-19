import React from "react";
import PageTitle from "../components/PageTitle";

export default function Profile() {
  const loading = false;
  return (
    <div className="d-flex justify-content-center">
      <div className="container px-4">
        <div className="row gx-5 p-3">
          <div className="container text-dark">
            <PageTitle loading={loading} title={"Profile"} />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Example textarea
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
