import React from "react";
import PageTitle from "../components/PageTitle";

export default function Products() {
  const loading = false;
  return (
    <section className="top py-3 px-3 mb-5 mb-lg-10">
      <div className="container text-dark">
        <PageTitle loading={loading} title={"Products"} />
      </div>
      <div className="row gx-xl-5">
        <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-header text-center pt-4">
              <p className="text-uppercase">
                <strong>Basic</strong>
              </p>
            </div>
            <div className="card-body">
              With supporting text below as a natural lead-in to additional
              content.
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-header text-center pt-4">
              <p className="text-uppercase">
                <strong>Advanced</strong>
              </p>
            </div>
            <div className="card-body">
              With supporting text below as a natural lead-in to additional
              content.
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
          <div className="card">
            <div className="card-header text-center pt-4">
              <p className="text-uppercase">
                <strong>Enterprise</strong>
              </p>
            </div>
            <div className="card-body">
              With supporting text below as a natural lead-in to additional
              content.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
